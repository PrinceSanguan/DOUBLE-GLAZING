import styles from './product-composite.module.css';

const ProductComposite = () => {
	return (
		<section className={styles.productSection} id="properties">
			<div className={styles.productContainer}>
				<div className={styles.productFrame}>
					<header className={styles.productHeader}>
						<h3 className={styles.title}>
							<span className={styles.titleLight}>Our Products</span>
							<span className={styles.titleItalic}> & Expertise</span>
						</h3>
					</header>
					<div className={styles.productGrid}>
						{[
							{ title: 'Composite Doors', text: 'High security, energy efficient composite doors in Leeds.', image: '/images/Hero/Agate-Grey-Jacobean-Border-768x759-1.webp' },
							{ title: 'uPVC Windows', text: 'Durable uPVC casement windows for modern homes.', image: '/images/Hero/dsc9477-1-663x1024.jpg' },
							{ title: 'House Extensions', text: 'Expand your space with bespoke house extensions.', image: '/images/Hero/house-extension-wetherby-1.jpg' },
							{ title: 'Conservatories', text: 'Bespoke conservatories tailored to your home.', image: '/images/Hero/p-shaped-conservatory.webp' },
							{ title: 'Timber Windows', text: 'Natural wooden windows with contemporary performance.', image: '/images/Hero/shutterstock_165958025-768x520.jpg' },
							{ title: 'uPVC Sash Sliding Windows', text: 'Classic sash style with smooth sliding performance.', image: '/images/Hero/shutterstock_420955957-min-768x512.jpg' },
							{ title: 'Aluminium Windows', text: 'Slimline aluminium frames with robust performance.', image: '/images/Hero/shutterstock_1145334395-768x512.jpg' },
							{ title: 'Aluminium Doors', text: 'Strong, stylish aluminium doors for any property.', image: '/images/Hero/smart076-830x556@2x-1536x1029.jpg' },
						].map((p, i) => (
							<article className={styles.card} key={i}>
								<div className={styles.cardImg}>
									<img 
										src={p.image} 
										alt={p.title}
										width="768"
										height="512"
										loading="lazy"
										style={{ width: '100%', height: '100%', objectFit: 'cover' }}
									/>
								</div>
								<div className={styles.cardBody}>
									<h4 className={styles.cardTitle}>{p.title}</h4>
									<p className={styles.cardText}>{p.text}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductComposite;
