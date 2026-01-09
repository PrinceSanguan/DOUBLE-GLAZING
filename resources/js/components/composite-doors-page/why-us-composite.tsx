import styles from './why-us-composite.module.css';
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

const WhyUsComposite = () => {
	return (
		<section className={styles.whyUsSection} id="neighborhoods">
			<div className={styles.whyUsContainer}>
				<div className={styles.whyUsFrame}>
						<header className={styles.whyUsHeader}>
							<h3 className={styles.title}>
								<span className={styles.titleLight}>How We Protect, Insulate</span>
								<span className={styles.titleItalic}> & Elevate Your Leeds Home</span>
							</h3>
							<p className={styles.subtitle} style={{marginTop: '0.25em', color: '#111', fontSize: 'clamp(1rem, 2vw, 1.15rem)', fontWeight: 400}}>
								Every Select Products composite door is engineered to enhance your home’s security, comfort, and first impression tailored precisely to your property and lifestyle.
							</p>
						</header>
					<div className={styles.whyUsGrid}>
					{[
						{ title: 'Solid-Core Security Performance', text: 'Reinforced composite cores with advanced multi-point locking. Toughened safety glass as standard. Independently tested to PAS 24 security standards.' },
						{ title: 'Superior Thermal Insulation', text: 'Dense composite construction reduces heat loss and draughts. Keeps warmth inside during winter and helps lower energy bills all year round.' },
						{ title: 'Precision Installation, Minimal Disruption', text: 'Expert local installers. Most doors are fitted within a single day. Clean, efficient workmanship with full respect for your home.' },
						{ title: '10-Year Insurance-Backed Guarantee', text: 'Every composite door is fully protected with an insurance-backed guarantee  long-term security and complete peace of mind.' },
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

export default WhyUsComposite;
