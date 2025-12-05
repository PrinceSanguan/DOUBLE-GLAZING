import styles from './hero.module.css';

type HeroProps = {
	imageUrl?: string;
};

const Hero: React.FC<HeroProps> = ({ imageUrl = 'https://images.unsplash.com/photo-1468436139062-f77a09adfc49?q=80&w=2070&auto=format&fit=crop' }) => {
	return (
		<section className={styles.heroSection}>
			<div className={styles.heroFrame}>
				<div
					className={styles.heroImage}
					style={{ backgroundImage: `url(${imageUrl})` }}
					aria-label="City skyline"
				/>
				<div className={styles.heroContent}>
					<h1 className={styles.title}>
						<span className={styles.titleLight}>Live the</span>
						<span className={styles.titleItalic}> City</span>
					</h1>
					<p className={styles.subtitle}>Premium properties across Manhattan; Brooklyn & beyond.</p>

					<aside
						className={styles.overlayCard}
						aria-label="Featured property"
						style={{ width: '60rem', right: '0', left: 'auto', border: '2px dashed rgba(255,255,255,0.4)' }}
					>
						<div className={styles.cardImage} />
						<div className={styles.cardBody}>
							<h3 className={styles.cardTitle}>The Grand Madison</h3>
							<p className={styles.cardText}>Designed for modern living, smart home tech, chef's kitchen, serene bedrooms.</p>
							<div className={styles.cardFooter}>
								<span className={styles.cardMeta}>Last entries</span>
								<button className={styles.cardAction} aria-label="View more">→</button>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
};

export default Hero;
