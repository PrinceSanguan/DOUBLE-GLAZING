import styles from './final-cta.module.css';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const FinalCta = () => {
	return (
		<section className={styles.finalCtaSection}>
			<div className={styles.finalCtaContainer}>
				<div className={styles.finalCtaFrame}>
					<h3 className={styles.title}>
						<span className={styles.titleLight}>Get</span>
						<span className={styles.titleItalic}> In Touch</span>
					</h3>
					<p className={styles.finalCtaText}>Instant Online Price — Get a free window and door quote today.</p>
					<div className={styles.finalCtaActions}>
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

export default FinalCta;
