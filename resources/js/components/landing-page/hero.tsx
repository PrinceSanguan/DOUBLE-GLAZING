import styles from './hero.module.css';
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

type HeroProps = {
	imageUrl?: string;
};

const Hero: React.FC<HeroProps> = ({ imageUrl = '/images/Hero/Airbrush-image-extender (6).webp' }) => {
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
						<div className={styles.textBlock}>
							<h2 className={styles.title}>
								<span className={styles.titleLight}>Select</span>
								<span className={styles.titleItalic}>Products</span>
							</h2>
							<h1 className={styles.subtitle}><strong>A-rated double glazing</strong> makes your Leeds home <strong>warmer, quieter, and more secure</strong> — installed by <strong>Which? Approved local experts</strong> you can trust.</h1>
							<a href="/quote" className={styles.cardAction} aria-label="Get a free quote" title="Get a free quote">Get a Free Quote</a>
						</div>

						{/* Right-side stacked cards container (quote form) */}
						<div className={styles.rightCards}>
							{/* Quick quote card */}
							<aside className={styles.quoteCard} aria-label="Quick quote">
								<form className={styles.form} onSubmit={submitQuickQuote}>
									<div className={styles.formHeader}>
											<h3 className={styles.formTitle}>Get Your Personalised Double Glazing Quote</h3>
											<p className={styles.formSubtitle}>Designed for Leeds homeowners who want warmer homes, lower energy bills, and expert installation.</p>
									</div>
									<div className={styles.formGroup}>
										<label htmlFor="qq-interest" className={styles.label}>I\'m interested in</label>
										<select
											id="qq-interest"
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
										<input id="qq-postcode" className={styles.input} value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder="e.g., LS1 1AA" />
									</div>
									<div className={styles.formGroup}> 
										<label htmlFor="qq-address" className={styles.label}>Address</label>
										<textarea id="qq-address" className={styles.textarea} rows={3} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street, City" />
									</div>
									<div className={styles.formRow}>
										<div className={styles.formGroup}>
											<label htmlFor="qq-name" className={styles.label}>Name</label>
											<input id="qq-name" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
										</div>
										<div className={styles.formGroup}>
											<label htmlFor="qq-number" className={styles.label}>Number</label>
											<input id="qq-number" ref={numberRef} className={styles.input} value={number} onChange={(e) => setNumber(e.target.value)} inputMode="tel" aria-required="true" aria-invalid={!!submitError && !number.trim() ? true : undefined} />
										</div>
									</div>
									<div className={styles.formGroup}> 
										<label htmlFor="qq-email" className={styles.label}>Email</label>
										<input id="qq-email" className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
									</div>
									{submitError && <div role="alert" style={{ color: '#ffd1d1' }}>{submitError}</div>}
									<button type="submit" className={styles.cardAction} aria-label="Submit" disabled={submitting}>
										{submitting ? 'Submitting…' : 'Submit'}
									</button>
								</form>
							</aside>
						</div>

						{/* Info card on lower-left */}
						<aside className={styles.infoCardLeft} aria-label="Installations overview">
							<div className={styles.cardBody}>
								<p className={styles.cardText}><strong>Cut Your Heating Bills by Up to 30%</strong> This Winter — Leeds double glazing specialists</p>
								<ul className={styles.cardList} aria-label="Key benefits">
									<li>Which?-approved, highly trusted local installers</li>
									<li>Energy-efficient windows & doors that make your home warmer</li>
									<li>Professional installation with minimal disruption</li>
									<li>10-year insurance-backed guarantee</li>
								</ul>
							</div>
						</aside>

					{/* Success Modal */}
					{showModal && (
						<div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="heroQuoteModalTitle">
							<div className={styles.modal}>
								<div className={styles.modalIconWrapper}>
									<CheckCircle2 size={56} strokeWidth={1.5} className={styles.modalIcon} />
								</div>
								<h2 id="heroQuoteModalTitle" className={styles.modalTitle}>Quote Request Received!</h2>
								<p className={styles.modalText}>Thank you for your interest in {interest}. We've received your details and a Leeds specialist will contact you shortly to discuss your quote.</p>
								<div className={styles.modalActions}>
									<button
										type="button"
										className={styles.btnPrimary}
										onClick={() => { try { localStorage.setItem('quoteSuccess', '1'); } catch {} window.location.assign('/'); }}
									>
										Back to Home
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

export default Hero;
