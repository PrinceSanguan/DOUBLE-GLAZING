import styles from './hero.module.css';

type HeroProps = {
	imageUrl?: string;
};

const Hero: React.FC<HeroProps> = ({ imageUrl = '/images/Hero/shutterstock_1145334395-768x512.jpg' }) => {
	return (
		<section className={styles.heroSection}>
			<div className={styles.heroContainer}>
				<div className={styles.heroFrame}>
					<div
						className={styles.heroImage}
						style={{ backgroundImage: `url(${imageUrl})` }}
						aria-label="City skyline"
					/>
					<div className={styles.heroContent}>
						<div className={styles.textBlock}>
								<h1 className={styles.title}>
									<span className={styles.titleLight}>Select</span>
									<span className={styles.titleItalic}>Products</span>
								</h1>
								<p className={styles.subtitle}>We're here to help you</p>
						</div>

						<aside className={styles.overlayCard} aria-label="Featured product">
							<div
								className={styles.cardImage}
								style={{ backgroundImage: `url(/images/Hero/dsc9477-1-663x1024.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
								aria-label="uPVC Windows image"
							/>
							<div className={styles.cardBody}>
								<h3 className={styles.cardTitle}>uPVC Windows</h3>
								<p className={styles.cardText}>Durable uPVC casement windows for modern homes.</p>
								<div className={styles.cardFooter}>
									<span className={styles.cardMeta}>See product</span>
									<button className={styles.cardAction} aria-label="View more">→</button>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
