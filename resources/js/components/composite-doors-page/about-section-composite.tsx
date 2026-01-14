
import styles from './about-section-composite.module.css';

const AboutSectionComposite = () => {
	return (
		<section className={styles.aboutSection} id="about">
			<div className={styles.aboutContainer}>
				<div className={styles.aboutFrame}>
					<div className={styles.aboutGrid}>
						<div>
							<h2 className={styles.title}>
								<span className={styles.titleLight}>About</span>
								<span className={styles.titleItalic}> Select Products</span>
							</h2>
							<p className={styles.aboutSubtitle}>We're here to help you</p>
							<p className={styles.aboutText}>
								At Select Products, we believe choosing your home improvement product should be a hassle free process. We offer a free window and door quote — get in touch to learn more. As your leading local double glazing specialists based in Leeds and trusted all across North and West Yorkshire, you can count on us for an exceptional installation and a true home improvement.
							</p>
							<p className={styles.aboutText}>
								From A-rated windows and secure doors to modern conservatories and hup! lightweight extensions, we tailor recommendations to your home, budget and timeline — with clear pricing and zero pressure.
							</p>
							<p className={styles.aboutText}>
								We serve Leeds and the wider North & West Yorkshire area with accredited installers, competitive lead times, and clear communication from survey to sign-off.
							</p>
							<p className={styles.aboutText}>
								Prefer to see options first? We can share samples, colour swatches and hardware choices so you can compare styles with confidence.
							</p>
						
							<p className={styles.aboutText}>
								Ready to start your project? <a href="/quote" style={{ color: 'var(--brand-blue)', fontWeight: 600 }}>Get a free quote</a> in minutes and we'll be in touch.
							</p>
						</div>
						<div
							className={styles.aboutImage}
							style={{ backgroundImage: "url('/images/Hero/house-extension-wetherby-1.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
							aria-label="Building preview"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSectionComposite;
