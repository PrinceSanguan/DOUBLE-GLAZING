import styles from './testimonial.module.css';

const testimonials = [
	{
		initials: 'HJ',
		name: 'H J',
		date: '2025-06-14',
		stars: 5,
		text:
			"I’m so delighted with my new conservatory! Also sooo refreshing to have quality folk carrying out the work in a world that is full of dishonourable shysters. Justin & Mark, thank you so much for your professionalism and expertise. I knew I was in safe hands after having so many negative experiences with other trades folk before you. I love it, thank you 🙏",
		source: 'Google',
	},
	{
		initials: 'CM',
		name: 'Charles M',
		date: '2025-05-20',
		stars: 5,
		text:
			'Very pleased with the whole process, they were always on time from quotation to installation. Price was competitive and the work was done to high standards. Very friendly team! Thank you',
		source: 'Google',
	},
	{
		initials: 'JB',
		name: 'Judith Bewell',
		date: '2024-12-06',
		stars: 5,
		text:
			'From the initial site visit, quotation and ordering through to the installation and completion we found the Justin, Cath and the team to be excellent. For a large replacement conservatory the various glazing and framing options were well explained, but at no time did we feel pressurised to place an order. The actual installation, led by Mark, was undertaken to a high standard with minimal disruption and mess. The site was left tidy and clean upon completion. We would highly recommend this company.',
		source: 'Google',
	},
];

const Stars = ({ count = 5 }: { count?: number }) => (
	<div className={styles.stars} aria-label={`${count} star rating`}>
		{Array.from({ length: count }).map((_, i) => (
			<span key={i} className={styles.star}>★</span>
		))}
	</div>
);

const Testimonial = () => {
	return (
		<section className={styles.testimonialSection}>
			<div className={styles.testimonialContainer}>
				<div className={styles.testimonialFrame}>
					<header className={styles.testimonialHeader}>
						<h3 className={styles.title}>
							<span className={styles.titleLight}>Google</span>
							<span className={styles.titleItalic}> Reviews</span>
						</h3>
					</header>
					<div className={styles.testimonialGrid}>
						{testimonials.map((t, idx) => (
							<article className={styles.gCard} key={idx} aria-label="Google review">
								<div className={styles.gHeader}>
									<div className={styles.avatar} aria-label={`${t.name} profile picture`}>{t.initials}</div>
									<div className={styles.meta}>
										<div className={styles.gName}>{t.name}</div>
										<div className={styles.gDate}>{t.date}</div>
									</div>
									<div className={styles.gBadge}>{t.source}</div>
								</div>
								<Stars count={t.stars} />
								<p className={styles.gText}>{t.text}</p>
								<div className={styles.gFooter}>
									<button className={styles.readMore} aria-label="Read more">Read more</button>
									<span className={styles.gSource}>{t.source}</span>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
