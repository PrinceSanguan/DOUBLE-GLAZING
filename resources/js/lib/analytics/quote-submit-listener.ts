type DataLayerEvent = Record<string, unknown>;

declare global {
	interface Window {
		dataLayer?: DataLayerEvent[];
		__boilerQuoteSubmitListenerInit?: boolean;
		__fhcQuoteSubmitListenerInit?: boolean;
		__fhcPendingQuoteSubmit?: {
			ts: number;
			interest: string;
			email: string;
			phoneCanonical: string;
			phoneNumberForAds: string;
		};
	}
}

function slugifyInterest(value: string): string {
	return value
		.trim()
		.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/[^a-z0-9]+/g, '_')
		.replace(/^_+|_+$/g, '')
		.replace(/_+/g, '_');
}

function isValidEmail(email: string): boolean {
	if (!email) return false;
	// pragmatic email validation
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizePhone(raw: string): { canonical: string; e164?: string } | null {
	if (!raw) return null;
	const cleaned = raw.replace(/[\s\-().]/g, '');
	if (!cleaned) return null;

	// keep leading + if provided
	const hasPlus = cleaned.startsWith('+');
	const digitsOnly = cleaned.replace(/\D/g, '');
	if (digitsOnly.length < 7 || digitsOnly.length > 15) return null;

	// naive UK normalization (most of your site is Leeds/UK)
	let e164: string | undefined;
	if (hasPlus) {
		e164 = '+' + digitsOnly;
	} else if (digitsOnly.startsWith('0')) {
		e164 = '+44' + digitsOnly.slice(1);
	} else if (digitsOnly.startsWith('44')) {
		e164 = '+44' + digitsOnly.slice(2);
	}

	return { canonical: digitsOnly, e164 };
}

function simpleHash(input: string): string {
	// non-cryptographic, used only for local dedupe keys
	let hash = 5381;
	for (let index = 0; index < input.length; index++) {
		hash = (hash * 33) ^ input.charCodeAt(index);
	}
	return (hash >>> 0).toString(16);
}

function getField(fd: FormData, ...names: string[]): string {
	for (const name of names) {
		const value = fd.get(name);
		if (typeof value === 'string' && value.trim()) return value.trim();
	}
	return '';
}

export function initQuoteSubmitListener(): void {
	if (typeof window === 'undefined' || typeof document === 'undefined') return;
	// Back-compat: if an older init flag exists, treat it as initialized.
	if (window.__fhcQuoteSubmitListenerInit || window.__boilerQuoteSubmitListenerInit) return;
	window.__fhcQuoteSubmitListenerInit = true;

	window.dataLayer = window.dataLayer || [];
	const dataLayerRef = window.dataLayer;
	const originalPush = dataLayerRef.push.bind(dataLayerRef);

	const firePendingAfterFormSubmit = () => {
		const pending = window.__fhcPendingQuoteSubmit;
		if (!pending) return;
		if (Date.now() - pending.ts > 10_000) return;

		const baseEvent = 'quote_submit';
		const suffix = slugifyInterest(pending.interest || 'unknown');
		const interestEvent = `${baseEvent}_${suffix}`;

		const dedupeKey = `quote_dedupe:${simpleHash(`${interestEvent}|${pending.email}|${pending.phoneCanonical}`)}`;
		try {
			const last = sessionStorage.getItem(dedupeKey);
			if (last) {
				const lastMs = Number(last);
				// Keep this window short to prevent double-click duplicates but allow normal re-submits.
				if (!Number.isNaN(lastMs) && Date.now() - lastMs < 60_000) return;
			}
			sessionStorage.setItem(dedupeKey, String(Date.now()));
		} catch {
			// ignore storage failures
		}

		const enhancedConversion = {
			email: pending.email,
			phone_number: pending.phoneNumberForAds,
		};

		const payload: DataLayerEvent = {
			quote_event: 'submit',
			interest: pending.interest,
			enhanced_conversion_data: enhancedConversion,
			user_data: enhancedConversion,
		};

		// Push on next tick to guarantee it appears after form_submit in GTM preview.
		setTimeout(() => {
			originalPush({ event: baseEvent, ...payload, quote_event_name: interestEvent });
			originalPush({ event: interestEvent, ...payload, quote_event_name: interestEvent });
		}, 0);
	};

	// Intercept dataLayer.push so we can fire our custom event(s) *after* form_submit.
	dataLayerRef.push = (...items: unknown[]) => {
		const result = originalPush(...(items as any[]));
		for (const item of items) {
			if (item && typeof item === 'object' && 'event' in (item as any)) {
				const evt = String((item as any).event || '');
				if (evt === 'form_submit' || evt === 'gtm.formSubmit') {
					firePendingAfterFormSubmit();
				}
			}
		}
		return result;
	};

	document.addEventListener(
		'submit',
		(e) => {
			const target = e.target;
			if (!(target instanceof HTMLFormElement)) return;
				const isTrackedForm =
					target.getAttribute('data-quote-form') === '1' ||
					target.getAttribute('data-boiler-quote-form') === '1';
				if (!isTrackedForm) return;
			if (target.getAttribute('data-final-step') !== '1') return;

			const fd = new FormData(target);

			const interest = getField(fd, 'interest') || (target.getAttribute('data-interest') || '').trim();
			const email = getField(fd, 'email').toLowerCase();
			const phoneRaw = getField(fd, 'number', 'phone', 'telephone');
			const phone = normalizePhone(phoneRaw);

			// Validate key fields before arming the post-form_submit fire.
			if (!isValidEmail(email) || !phone) return;

			window.__fhcPendingQuoteSubmit = {
				ts: Date.now(),
				interest,
				email,
				phoneCanonical: phone.canonical,
				phoneNumberForAds: phone.e164 || phoneRaw,
			};
		},
		true,
	);
}
