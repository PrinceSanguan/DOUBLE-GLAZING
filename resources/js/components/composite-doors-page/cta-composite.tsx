import styles from './cta-composite.module.css';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const CtaComposite = () => {
	return (
		<section className={styles.ctaSection} id="buy-sell">
			<div className={styles.ctaContainer}>
				<div className={styles.ctaFrame}>
					<div>
						<h3 className={styles.ctaTitle}>See Your Door Options & Prices<br/>Get Free Quote</h3>
						<p className={styles.ctaText}>Speak with our friendly team.</p>
					</div>
					<div className={styles.ctaActions}>
						<Link href="/quote" aria-label="Free Quote">
							<Button className={styles.primaryBtn}>Free Quote</Button>
						</Link>
						<a href="tel:01132578933" aria-label="Call Now: 01132578933">
							<Button variant="secondary" className={styles.secondaryWhiteBtn}>Call Now: 01132578933</Button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaComposite;
