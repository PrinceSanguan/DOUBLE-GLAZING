import styles from './cta.module.css';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const Cta = () => {
	return (
		<section className={styles.ctaSection} id="buy-sell">
			<div className={styles.ctaContainer}>
				<div className={styles.ctaFrame}>
					<div>
						<h3 className={styles.ctaTitle}>Ready to find your next home?</h3>
						<p className={styles.ctaText}>Schedule a private viewing or speak with our agents.</p>
					</div>
					<div className={styles.ctaActions}>
						<Link href="/quote" aria-label="Free Quote">
							<Button className={styles.primaryBtn}>Free Quote</Button>
						</Link>
						<Button variant="secondary" className={styles.secondaryWhiteBtn}>Contact Us</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
