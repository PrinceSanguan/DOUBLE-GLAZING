import styles from './header.module.css';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import React from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

	React.useEffect(() => {
		function onKeyDown(e: KeyboardEvent) {
			if (e.key === 'Escape') setMobileMenuOpen(false);
		}
		if (mobileMenuOpen) window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [mobileMenuOpen]);

	return (
		<header className={styles.header}>
			<div className={styles.mobileBanner} aria-label="Mobile call banner">
				<a
					href="tel:01132578933"
					className={styles.mobileCall}
					aria-label="Call Now: 01132578933"
				>
					<Phone className={styles.mobileCallIcon} size={18} strokeWidth={2.5} aria-hidden="true" />
					<span className={styles.callNumber}>0113 257 8933</span>
				</a>
			</div>
			<nav className={styles.nav} aria-label="Primary">
				<Link href="/" className={styles.brand} aria-label="Home">
					<img src="/images/select-logo.svg" alt="Select logo" className={styles.logo} loading="lazy" />
				</Link>
				<button
					type="button"
					className={styles.hamburger}
					aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={mobileMenuOpen}
					onClick={() => setMobileMenuOpen((v) => !v)}
				>
					<span className={styles.hamburgerIcon} aria-hidden="true">
						<span />
						<span />
						<span />
					</span>
				</button>
				<div className={styles.navLinks}>
					<Link href="/" className={styles.navLink}>Home</Link>
					<Link href="/composite-doors" className={styles.navLink}>Composite Doors</Link>
					<Link href="/upvc-page" className={styles.navLink}>uPVC Windows & Doors</Link>
				</div>
				<div className={styles.actions}>
					<a href="tel:01132578933" className={`${styles.contact} ${styles.contactWhite}`} aria-label="Call Now: 01132578933">
						<Phone size={16} strokeWidth={2.5} aria-hidden="true" />
						<span className={styles.callNumber}>0113 257 8933</span>
					</a>
					<Link href="/quote" aria-label="Free Quote">
						<Button className={styles.bookBtn} variant="default">Free Quote</Button>
					</Link>
				</div>
			</nav>

			{mobileMenuOpen && (
				<div
					className={styles.mobileMenuOverlay}
					role="dialog"
					aria-modal="true"
					aria-label="Mobile navigation"
					onClick={() => setMobileMenuOpen(false)}
				>
					<div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
						<Link href="/" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
						<Link href="/composite-doors" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Composite Doors</Link>
						<Link href="/upvc-page" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>uPVC Windows & Doors</Link>
						<Link href="/quote" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Free Quote</Link>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
