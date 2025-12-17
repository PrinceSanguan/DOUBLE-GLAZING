import styles from './hero.module.css';
import React from 'react';

type HeroProps = {
	imageUrl?: string;
};

const Hero: React.FC<HeroProps> = ({ imageUrl = '/images/Hero/Airbrush-image-extender (6).webp' }) => {
	const [interest, setInterest] = React.useState('Windows');
	const [when, setWhen] = React.useState('Immediately');

	function proceedToForm() {
		const params = new URLSearchParams({ interest, when }).toString();
		window.location.href = `/quote?${params}`;
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

						{/* Right-side stacked cards container */}
						<div className={styles.rightCards}>
							{/* Quick quote card */}
							<aside className={styles.quoteCard} aria-label="Quick quote">
								<form className={styles.form} onSubmit={(e) => { e.preventDefault(); proceedToForm(); }}>
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
									<button type="submit" className={styles.cardAction} aria-label="Proceed to quote form">Proceed</button>
								</form>
							</aside>

							{/* Info card */}
							<aside className={styles.infoCard} aria-label="Installations overview">
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
			</div>
		</section>
	);
};

export default Hero;
