import styles from './hero.module.css';
import React from 'react';

type HeroProps = {
	imageUrl?: string;
};

const Hero: React.FC<HeroProps> = ({ imageUrl = '/images/Hero/Airbrush-image-extender (6).webp' }) => {
	const [interest, setInterest] = React.useState('Windows');
	const [when, setWhen] = React.useState('Immediately');
	const [postcode, setPostcode] = React.useState('');
	const [address, setAddress] = React.useState('');
	const [name, setName] = React.useState('');
	const [number, setNumber] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [submitting, setSubmitting] = React.useState(false);
	const [submitted, setSubmitted] = React.useState(false);
	const [submitError, setSubmitError] = React.useState<string | null>(null);

	async function submitQuickQuote(e: React.FormEvent) {
		e.preventDefault();
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
			setSubmitted(true);
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
							<h1 className={styles.subtitle}>Leeds double glazing specialists for windows, doors, conservatories & extensions. For homeowners who refuse to compromise.</h1>
							<a href="/quote" className={styles.cardAction} aria-label="Get a free quote" title="Get a free quote">Get a Free Quote</a>
						</div>

						{/* Right-side stacked cards container (quote form) */}
						<div className={styles.rightCards}>
							{/* Quick quote card */}
							<aside className={styles.quoteCard} aria-label="Quick quote">
								<form className={styles.form} onSubmit={submitQuickQuote}>
									<div className={styles.formHeader}>
										<h3 className={styles.formTitle}>Request a Quote</h3>
										<p className={styles.formSubtitle}>Answer a few questions so we can help. <span className={styles.pill} aria-live="polite">Selected: {interest} Quote</span></p>
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
											<option>Windows</option>
											<option>Doors</option>
											<option>Conservatories</option>
											<option>Extensions</option>
											<option>Other</option>
										</select>
									</div>
									<div className={styles.formGroup}>
										<label htmlFor="qq-when" className={styles.label}>When do you plan to start?</label>
										<select
											id="qq-when"
											className={styles.select}
											value={when}
											onChange={(e) => setWhen(e.target.value)}
											aria-label="Select project timeline"
										>
											<option>Immediately</option>
											<option>1-3 months</option>
											<option>3-6 months</option>
											<option>Just researching</option>
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
											<input id="qq-number" className={styles.input} value={number} onChange={(e) => setNumber(e.target.value)} />
										</div>
									</div>
									<div className={styles.formGroup}> 
										<label htmlFor="qq-email" className={styles.label}>Email</label>
										<input id="qq-email" className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
									</div>
									{submitError && <div role="alert" style={{ color: '#ffd1d1' }}>{submitError}</div>}
									{submitted ? (
										<div role="status" aria-live="polite" style={{ color: '#d4f6d4', fontWeight: 600 }}>Thanks! We received your request.</div>
									) : (
										<button type="submit" className={styles.cardAction} aria-label="Submit" disabled={submitting}>
											{submitting ? 'Submitting…' : 'Submit'}
										</button>
									)}
								</form>
							</aside>
						</div>

						{/* Info card on lower-left */}
						<aside className={styles.infoCardLeft} aria-label="Installations overview">
							<div className={styles.cardBody}>
								<p className={styles.cardText}>Transparent pricing and premium, long-lasting products. Select Products is the Which?-approved local team trusted across Leeds for exceptional installations.</p>
								<ul className={styles.cardList} aria-label="Key benefits">
									<li>Which?-approved, highly trusted local installers</li>
									<li>Energy-efficient windows & doors that make your home warmer</li>
									<li>Professional installation with minimal disruption</li>
									<li>10-year insurance-backed guarantee</li>
								</ul>
							</div>
						</aside>

					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
