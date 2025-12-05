import styles from './header.module.css';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav} aria-label="Primary">
				<div className={styles.brand}>//</div>
				<ul className={styles.links}>
					<li><Link href="#properties">Properties</Link></li>
					<li><Link href="#neighborhoods">Neighborhoods</Link></li>
					<li><Link href="#about">About</Link></li>
					<li><Link href="#buy-sell">Buy / Sell</Link></li>
				</ul>
				<div className={styles.actions}>
					<Link href="#contact" className={styles.contact}>Contact us</Link>
					<Button className={styles.bookBtn} variant="default">Booking now</Button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
