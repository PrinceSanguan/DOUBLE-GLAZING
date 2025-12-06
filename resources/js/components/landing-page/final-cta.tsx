import styles from './final-cta.module.css';
import { Button } from '@/components/ui/button';

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
						<Button>Instant Online Price</Button>
						<Button variant="secondary">Get A Quote</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FinalCta;
