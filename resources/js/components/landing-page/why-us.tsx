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
							<span className={styles.titleLight}>How We Make Your Leeds Home</span>
							<span className={styles.titleItalic}> Warmer, Safer, Quieter</span>
							</h3>						<p className={styles.subtitle} style={{marginTop: '0.25em', color: '#111', fontSize: 'clamp(1rem, 2vw, 1.15rem)', fontWeight: 400}}>
							Every Select Products installation is designed around your home's needs.
						</p>						</header>
					<div className={styles.whyUsGrid}>
					{[
						{ title: 'A-Rated Energy Efficiency', text: '<strong>Keep heat in, cold out.</strong> Less reliance on heating. <strong>Lower bills all year.</strong>' },
						{ title: 'High-Security Locking Systems', text: '<strong>Multi-point locks and toughened glass</strong> as standard. Tested to <strong>PAS 24 security standards.</strong>' },
					{ title: 'Professional Installation with Minimal Disruption', text: `<strong>Most installations completed in 1–2 days.</strong> We tidy up as we go. You won't know we were there except for the beautiful new windows.` },
					{ title: '10-Year Insurance-Backed Guarantee', text: '<strong>Every window, every door, every installation protected.</strong> Full peace of mind.' },
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

export default WhyUs;
