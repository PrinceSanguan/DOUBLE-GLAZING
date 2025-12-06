
import styles from './about-section.module.css';

const AboutSection = () => {
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
							<p className={styles.aboutSubtitle}>We’re here to help you</p>
							<p className={styles.aboutText}>
								At Select Products, we believe choosing your home improvement product should be a hassle free process. We offer a free window and door quote — get in touch to learn more. As your leading local double glazing specialists based in Leeds and trusted all across North and West Yorkshire, you can count on us for an exceptional installation and a true home improvement.
							</p>
						</div>
						<div
							className={styles.aboutImage}
							style={{ backgroundImage: "url('/images/Hero/house-extension-wetherby-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
							aria-label="Building preview"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
