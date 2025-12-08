import styles from './hero.module.css';
import React from 'react';

type HeroProps = {
	imageUrl?: string;
};

const Hero: React.FC<HeroProps> = ({ imageUrl = '/images/Hero/house-extension-wetherby-1.jpg' }) => {
	// Two rotating promo cards (Composite Doors + Conservatories)
	const items = [
		{
			title: 'Composite Door Installers In Leeds',
			text:
				'Enhance the style and security of your home with a bespoke front door. Composite doors combine traditional aesthetics with modern performance. It’s sure to impress! To talk to us about a free double glazing quote, get in touch with the friendly team at Select Products today.',
			image: '/images/Hero/Agate-Grey-Jacobean-Border-768x759-1.webp',
			leftLabel: 'Get Free Quote',
			leftHref: '/quote',
			rightLabel: 'Call Now: 01132578933',
			rightHref: 'tel:01132578933',
		},
		{
			title: 'Qualified Conservatory & Extension Builders',
			text:
				'Create a living space for you and your family to enjoy all year round. Our team will fully project manage the design and build of your dream conservatory or glazed extension. Get your free quote today.',
			image: '/images/Hero/p-shaped-conservatory.webp',
			leftLabel: 'Get Free Quote',
			leftHref: '/quote',
			rightLabel: 'Call Now: 01132578933',
			rightHref: 'tel:01132578933',
		},
		{
			title: 'Save On Your Energy Bills',
			text:
				'Use our NEW & FREE Energy Saving Calculator to see how much you can save on your energy bills. Plus, our latest Product Visualiser lets you see our most popular window styles up close so you can make the right choice to start saving today.',
			image: '/images/Hero/dsc9477-1-663x1024.jpg',
			leftLabel: 'Get Free Quote',
			leftHref: '/quote',
			rightLabel: 'Call Now: 01132578933',
			rightHref: 'tel:01132578933',
		},
		{
			title: 'Double Glazing Specialists In Leeds',
			text:
				'Local family-run business for high security, A-rated windows and doors in uPVC, timber and aluminium. Proudly serving Leeds, Pudsey, Horsforth, Cookridge and across West & North Yorkshire. Request your FREE no-obligation online quote 24/7. Discuss your project today with our home improvement experts.',
			image: '/images/Hero/shutterstock_1145334395-768x512.jpg',
			leftLabel: 'Get Free Quote',
			leftHref: '/quote',
			rightLabel: 'Call Now: 01132578933',
			rightHref: 'tel:01132578933',
		},
	] as const;

	const [index, setIndex] = React.useState(0);
	React.useEffect(() => {
		const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
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
								<p className={styles.subtitle}>Leeds double glazing specialists for windows, doors, conservatories and extensions. Free, no-obligation quotes and friendly advice.</p>
								<a href="/quote" className={styles.cardAction} aria-label="Get a free quote" title="Get a free quote">Get a Free Quote</a>
						</div>

						<aside className={styles.overlayCard} aria-label={items[index].title}>
							<div
								className={styles.cardImage}
								style={{ backgroundImage: `url(${items[index].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
								aria-label={`${items[index].title} image`}
							/>
							<div className={styles.cardBody}>
								<h3 className={styles.cardTitle}>{items[index].title}</h3>
								<p className={styles.cardText}>{items[index].text}</p>
								<div className={styles.cardFooter}>
									<a href={items[index].leftHref} className={styles.cardAction} aria-label={items[index].leftLabel} title={items[index].leftLabel}>{items[index].leftLabel}</a>
									<a href={items[index].rightHref} className={styles.cardAction} aria-label={items[index].rightLabel} title={items[index].rightLabel}>{items[index].rightLabel}</a>
								</div>
							</div>
							<div className={styles.cardNav} role="navigation" aria-label="Hero slides navigation">
								{items.map((_, i) => (
									<button
										key={i}
										type="button"
										className={i === index ? `${styles.navDot} ${styles.navDotActive}` : styles.navDot}
										aria-label={`Go to slide ${i + 1}`}
										aria-pressed={i === index}
										onClick={() => setIndex(i)}
									/>
								))}
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
