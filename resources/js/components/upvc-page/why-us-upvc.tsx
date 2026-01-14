import styles from './why-us-upvc.module.css';
import { CheckCircle, Home, ShieldCheck, Wrench, Lock, Users } from 'lucide-react';

const Icon = ({ i }: { i: number }) => {
	const size = 24;
	switch (i) {
		case 0: // Which? Approved Installers
			return <CheckCircle size={size} color="#ffffff" aria-hidden />;
		case 1: // Local & Reliable
			return <Home size={size} color="#ffffff" aria-hidden />;
		case 2: // 10 Year Guarantee
			return <ShieldCheck size={size} color="#ffffff" aria-hidden />;
		case 3: // Experienced Installers
			return <Wrench size={size} color="#ffffff" aria-hidden />;
		case 4: // Security & Energy
			return <Lock size={size} color="#ffffff" aria-hidden />;
		default: // Family-run
			return <Users size={size} color="#ffffff" aria-hidden />;
	}
};

const WhyUsUpvc = () => {
	return (
		<section className={styles.whyUsSection} id="neighborhoods">
			<div className={styles.whyUsContainer}>
				<div className={styles.whyUsFrame}>
						<header className={styles.whyUsHeader}>
							<h3 className={styles.title}>
								<span className={styles.titleLight}>A Smarter Upgrade</span>
								<span className={styles.titleItalic}> for Leeds Homes</span>
							</h3>
							<p className={styles.subtitle} style={{marginTop: '0.25em', color: '#111', fontSize: 'clamp(1rem, 2vw, 1.15rem)', fontWeight: 400}}>
								Every installation is engineered around comfort, security, and long-term value not shortcuts.
							</p>
						</header>
					<div className={styles.whyUsGrid}>
												{[
													{ title: 'A-Rated Energy Performance', text: 'Designed to <strong>keep warmth in and energy bills down</strong>, year after year.' },
													{ title: 'Advanced Home Security', text: '<strong>Multi-point locking and reinforced glazing</strong> as standard  tested to <strong>British security standards.</strong>' },
													{ title: 'Clean, Professional Installation', text: '<strong>Most projects are completed within 1–2 days.</strong> Minimal disruption. Total respect for your home.' },
													{ title: 'Guaranteed Peace of Mind', text: '<strong>Every product and installation is protected</strong> with a <strong>10-year insurance-backed guarantee.</strong>' },
												].map((f, i) => (
							<div className={styles.feature} key={i}>
														<div className={styles.icon} aria-hidden>
															<Icon i={i} />
														</div>
								<div>
									<div className={styles.fTitle}>{f.title}</div>
									<div className={styles.fText} dangerouslySetInnerHTML={{ __html: f.text }} />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyUsUpvc;
