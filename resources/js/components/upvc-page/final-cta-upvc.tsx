import styles from './final-cta-upvc.module.css';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const FinalCtaUpvc = () => {
	return (
		<section className={styles.finalCtaSection}>
			<div className={styles.finalCtaContainer}>
				<div className={styles.finalCtaFrame}>
					<h3 className={styles.title}>
						<span className={styles.titleLight}>Ready to Save Money</span>
						<span className={styles.titleItalic}> and Stay Warmer This Winter?</span>
					</h3>
					<p className={styles.finalCtaText}>Join hundreds of Leeds homeowners who've already made the switch. Get your free, no-obligation quote in under 60 seconds.</p>
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

export default FinalCtaUpvc;
