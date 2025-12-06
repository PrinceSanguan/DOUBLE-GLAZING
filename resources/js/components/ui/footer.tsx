import styles from './footer.module.css';
import { Link } from '@inertiajs/react';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.frame}>
						<div className={styles.grid}>
							<div>
								<div className={styles.brand}>
									<img src="/images/select-logo.svg" alt="Select Products" style={{ height: '44px', width: 'auto' }} />
								</div>
								<p>Company Reg Number 7601494 Registered in England and Wales. Select Products (Yorkshire) Limited trading as Select Products.</p>
							</div>
						</div>
					<div className={styles.bottom}>
						<span>© {new Date().getFullYear()} Select Products</span>
						<span>All rights reserved</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
