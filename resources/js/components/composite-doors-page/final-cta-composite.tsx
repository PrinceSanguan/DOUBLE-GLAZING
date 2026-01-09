import styles from './final-cta-composite.module.css';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const FinalCtaComposite = () => {
	return (
		<section className={styles.finalCtaSection}>
			<div className={styles.finalCtaContainer}>
				<div className={styles.finalCtaFrame}>
					<h3 className={styles.title}>
						<span className={styles.titleLight}>Ready to Feel Safer</span>
						<span className={styles.titleItalic}> Every Time You Close Your Door?</span>
					</h3>
					<p className={styles.finalCtaText}>Upgrade your home with a premium composite door designed for security, insulation, and lasting style professionally installed by trusted local experts in Leeds.</p>
					<div className={styles.finalCtaActions}>
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

export default FinalCtaComposite;
