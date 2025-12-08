import React from 'react';
import styles from './trusted-clients.module.css';

type Client = { name: string; logo: string };

const clients: Client[] = [
	{ name: 'Dark Seal', logo: '/images/landing/750X750-Dark-Seal-1.webp' },
	{ name: 'Top 3 2019', logo: '/images/landing/2019top3.webp' },
	{ name: 'Fairtrades Accredited', logo: '/images/landing/fairtrades-accred.webp' },
	{ name: 'FMB', logo: '/images/landing/FMB-Logo.webp' },
	{ name: 'Pilkington', logo: '/images/landing/Pilkington-Logo.webp' },
	{ name: 'Select Products Ultra Installer', logo: '/images/landing/select-products-ultra-installer.webp' },
	{ name: 'Select Products Leeds', logo: '/images/landing/selectproducts-leeds.webp' },
	{ name: 'TrustMark Accredited', logo: '/images/landing/trustmark-accred.webp' },
];

const TrustedClients: React.FC = () => {
	return (
		<section className={styles.section} aria-label="Trusted clients logos">
			<div className={styles.container}>
				<div className={styles.carousel}>
					<div className={styles.track}>
						{clients.concat(clients).concat(clients).map((c, i) => (
							<div key={i} className={styles.logoCard} aria-label={c.name} title={c.name}>
								<img src={c.logo} alt={c.name} className={styles.logoImage} loading="lazy" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrustedClients;

