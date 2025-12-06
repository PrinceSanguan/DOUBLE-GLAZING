import styles from './cta.module.css';
import { Button } from '@/components/ui/button';

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
						<Button>Book a viewing</Button>
						<Button variant="secondary">Contact sales</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
