import styles from './hero.module.css';
import React from 'react';

type HeroProps = {
	imageUrl?: string;
};

const Hero: React.FC<HeroProps> = ({ imageUrl = '/images/Hero/Airbrush-image-extender (6).webp' }) => {
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

						{/* Right-side info card */}
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
		</section>
	);
};

export default Hero;
