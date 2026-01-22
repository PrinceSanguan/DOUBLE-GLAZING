import styles from './hero-composite.module.css';
import React from 'react';
import { Check, Phone, ArrowRight } from 'lucide-react';

type HeroProps = {
	imageUrl?: string;
};

const HeroComposite: React.FC<HeroProps> = ({ imageUrl = '/images/Hero/Airbrush-image-extender (6).webp' }) => {
	const [interest, setInterest] = React.useState('Composite Doors');
	const when = 'N/A';
	const [postcode, setPostcode] = React.useState('');
	const [address, setAddress] = React.useState('');
	const [name, setName] = React.useState('');
	const [number, setNumber] = React.useState('');
	const numberRef = React.useRef<HTMLInputElement | null>(null);
	const [email, setEmail] = React.useState('');
	const [submitting, setSubmitting] = React.useState(false);
	const [submitError, setSubmitError] = React.useState<string | null>(null);
	const [showModal, setShowModal] = React.useState(false);

	async function submitQuickQuote(e: React.FormEvent) {
		e.preventDefault();
		if (!number.trim()) {
			setSubmitError('Phone number is required');
			numberRef.current?.focus();
			return;
		}
		setSubmitError(null);
		setSubmitting(true);
		try {
			const res = await fetch('/quote', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-Requested-With': 'XMLHttpRequest',
				},
				body: JSON.stringify({ interest, when, postcode, address, name, number, email }),
			});
			const data = await res.json().catch(() => ({} as any));
			if (!res.ok) {
				const msg = (data && (data.message || data.error)) || 'Submission failed';
				throw new Error(msg);
			}
			// Show success modal and update URL without navigation
			try { window.history.pushState({}, '', '/leadsubmitted'); } catch {}
			setShowModal(true);
		} catch (err: any) {
			setSubmitError(String(err?.message || err));
		} finally {
			setSubmitting(false);
		}
	}
	return (
		<section className={styles.heroSection}>
			<div className={styles.heroContainer}>
				<div className={styles.heroFrame}>
					<div
						className={styles.heroImage}
						style={{ backgroundImage: `url("${imageUrl}")` }}
						aria-label="City skyline"
					/>
					<div className={styles.heroContent}>
						<div className={styles.leftPanel}>
							<div className={styles.trustBadge}>
								Which? Approved • Police-Approved Security • Local Leeds Installers
							</div>
							
							<h1 className={styles.title}>
								Composite Doors in Leeds
								<span className={styles.titleHighlight}>Upgrade Your Home with Stylish & High Security</span>
							</h1>
							
							<p className={styles.subheadline}>
								Fully Fitted Composite Doors that keep your Leeds home safer, warmer, and stylish professionally installed by trusted Which? Approved local specialists.
							</p>
							
							<div className={styles.featuresGrid}>
								<div className={styles.featureItem}>
									<Check size={18} strokeWidth={2.5} className={styles.checkIcon} />
									<span>Minimal disruption installation</span>
								</div>
								<div className={styles.featureItem}>
									<Check size={18} strokeWidth={2.5} className={styles.checkIcon} />
									<span>10-year insurance-backed guarantee</span>
								</div>
								<div className={styles.featureItem}>
									<Check size={18} strokeWidth={2.5} className={styles.checkIcon} />
									<span>Huge selection of door furniture</span>
								</div>
								<div className={styles.featureItem}>
									<Check size={18} strokeWidth={2.5} className={styles.checkIcon} />
									<span>Customisable glazing options</span>
								</div>
							</div>
							
							<div className={styles.ctaButtons}>
								<a href="/quote" className={styles.primaryButton}>
									Get Quote <ArrowRight size={20} strokeWidth={2.5} />
								</a>
								<a href="tel:01132578933" className={styles.secondaryButton}>
									<Phone size={18} strokeWidth={2} />
									0113 257 8933
								</a>
							</div>
							
							<div className={styles.secondaryCta}>
								<p className={styles.secondaryLabel}>Prefer a conversation?</p>
								<a href="tel:01132578933" className={styles.phoneLink}>
									<Phone size={16} strokeWidth={2} /> Speak to a Leeds glazing specialist: <strong>0113 257 8933</strong>
								</a>
							</div>
						</div>

						<aside className={styles.quoteCard} aria-label="Quick quote">
							<form className={styles.form} onSubmit={submitQuickQuote} data-quote-form="1" data-final-step="1" data-interest={interest}>
								<div className={styles.formHeader}>
									<h3 className={styles.formTitle}>Get Your Personalised Composite Door Quote</h3>
									<p className={styles.formSubtitle}>Stylish, high-security composite doors professionally fitted for Leeds homeowners who want their entrance to look exceptional and perform even better.</p>
								</div>
								<div className={styles.formGroup}>
									<label htmlFor="qq-interest" className={styles.label}>I\'m interested in</label>
									<select
										id="qq-interest"
										name="interest"
										className={styles.select}
										value={interest}
										onChange={(e) => setInterest(e.target.value)}
										aria-label="Select product interest"
									>
										<option>Composite Doors</option>
										<option>uPVC Windows & Doors</option>
									</select>
								</div>
								<div className={styles.formGroup}>
									<label htmlFor="qq-postcode" className={styles.label}>Postcode</label>
									<input id="qq-postcode" name="postcode" className={styles.input} value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder="e.g., LS1 1AA" />
								</div>
								<div className={styles.formGroup}>
									<label htmlFor="qq-address" className={styles.label}>Address</label>
									<textarea id="qq-address" name="address" className={styles.textarea} rows={3} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street, City" />
								</div>
								<div className={styles.formRow}>
									<div className={styles.formGroup}>
										<label htmlFor="qq-name" className={styles.label}>Name</label>
										<input id="qq-name" name="name" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
									</div>
									<div className={styles.formGroup}>
										<label htmlFor="qq-number" className={styles.label}>Number</label>
										<input id="qq-number" name="number" ref={numberRef} className={styles.input} value={number} onChange={(e) => setNumber(e.target.value)} inputMode="tel" aria-required="true" aria-invalid={!!submitError && !number.trim() ? true : undefined} />
									</div>
								</div>
								<div className={styles.formGroup}>
									<label htmlFor="qq-email" className={styles.label}>Email</label>
									<input id="qq-email" name="email" className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
								</div>
								{submitError && <div role="alert" style={{ color: '#ffd1d1' }}>{submitError}</div>}
								<button type="submit" className={styles.cardAction} aria-label="Submit" disabled={submitting}>
									{submitting ? 'Submitting…' : 'Submit'}
								</button>
							</form>
						</aside>

						{/* Success Modal */}
						{showModal && (
							<div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="heroQuoteModalTitle">
								<div className={styles.modal}>
									<h2 id="heroQuoteModalTitle" className={styles.modalTitle}>Confirm Submission</h2>
									<p className={styles.modalText}>We received your {interest} quote details. Proceed back to the homepage?</p>
									<div className={styles.modalActions}>
										<button
											type="button"
											className={styles.btnPrimary}
											onClick={() => { try { localStorage.setItem('quoteSuccess', '1'); } catch {} window.location.assign('/'); }}
										>
											Confirm
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroComposite;
