import styles from './header.module.css';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav} aria-label="Primary">
				<Link href="/" className={styles.brand} aria-label="Home">
					<img src="/images/select-logo.svg" alt="Select logo" className={styles.logo} />
				</Link>
				<div className={styles.actions}>
					<Link href="#contact" className={`${styles.contact} ${styles.contactWhite}`}>Contact Us</Link>
					<Link href="/quote" aria-label="Free Quote">
						<Button className={styles.bookBtn} variant="default">Free Quote</Button>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
