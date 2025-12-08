import styles from './hero.module.css';
import React from 'react';

type HeroProps = {
	imageUrl?: string;
};

const Hero: React.FC<HeroProps> = ({ imageUrl = '/images/Hero/shutterstock_1145334395-768x512.jpg' }) => {
	const items = [
		{ title: 'uPVC Windows', text: 'Durable uPVC casement windows for modern homes.', image: '/images/Hero/dsc9477-1-663x1024.jpg' },
		{ title: 'Composite Doors', text: 'High security, energy efficient composite doors in Leeds.', image: '/images/Hero/Agate-Grey-Jacobean-Border-768x759-1.webp' },
		{ title: 'Conservatories', text: 'Bespoke conservatories tailored to your home.', image: '/images/Hero/p-shaped-conservatory.webp' },
	];
	const [index, setIndex] = React.useState(0);
	React.useEffect(() => {
		const id = setInterval(() => setIndex(i => (i + 1) % items.length), 3000);
		return () => clearInterval(id);
	}, [items.length]);
	return (
		<section className={styles.heroSection}>
			<div className={styles.heroContainer}>
				<div className={styles.heroFrame}>
					<div
						className={styles.heroImage}
						style={{ backgroundImage: `url(${imageUrl})` }}
						aria-label="City skyline"
					/>
					<div className={styles.heroContent}>
						<div className={styles.textBlock}>
								<h1 className={styles.title}>
									<span className={styles.titleLight}>Select</span>
									<span className={styles.titleItalic}>Products</span>
								</h1>
								<p className={styles.subtitle}>We're here to help you</p>
								<a href="/quote" className={styles.cardAction} aria-label="Get a free quote" title="Get a free quote">Get a Free Quote</a>
						</div>

						<aside className={styles.overlayCard} aria-label="Featured product">
							<div
								className={styles.cardImage}
								style={{ backgroundImage: `url(${items[index].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
								aria-label={`${items[index].title} image`}
							/>
							<div className={styles.cardBody}>
								<h3 className={styles.cardTitle}>{items[index].title}</h3>
								<p className={styles.cardText}>{items[index].text}</p>
								<div className={styles.cardFooter}>
									<span className={styles.cardMeta}>Featured</span>
									<a href="/quote" className={styles.cardAction} aria-label="Get a free quote from hero" title="Get a free quote">Get Quote</a>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
