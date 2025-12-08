import styles from './why-us.module.css';
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

const WhyUs = () => {
	return (
		<section className={styles.whyUsSection} id="neighborhoods">
			<div className={styles.whyUsContainer}>
				<div className={styles.whyUsFrame}>
						<header className={styles.whyUsHeader}>
							<h3 className={styles.title}>
								<span className={styles.titleLight}>Why</span>
								<span className={styles.titleItalic}> choose us</span>
							</h3>
						</header>
					<div className={styles.whyUsGrid}>
												{[
								{ title: 'Which? Approved Installers', text: 'We are Which? Approved Window Installers in Leeds.' },
								{ title: 'Local & Reliable', text: 'Trusted across North and West Yorkshire at competitive prices.' },
								{ title: 'Comprehensive 10 Year Guarantee', text: 'Insurance-backed through HomePro for complete peace of mind.' },
								{ title: 'Experienced Veranda & Glazing Installers', text: 'Highly experienced local team for verandas and glazing products.' },
								{ title: 'High Security & Energy Saving', text: 'Focus on performance, security and energy efficiency.' },
								{ title: 'Trusted, Family-Run', text: 'Friendly, family-run company with specialist expertise.' },
							].map((f, i) => (
							<div className={styles.feature} key={i}>
														<div className={styles.icon} aria-hidden>
															<Icon i={i} />
														</div>
								<div>
									<div className={styles.fTitle}>{f.title}</div>
									<div className={styles.fText}>{f.text}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
