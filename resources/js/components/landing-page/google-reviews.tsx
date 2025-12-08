import React from 'react';
import styles from './google-reviews.module.css';

type Review = {
	name: string;
	rating: number; // 1-5
	text: string;
	date?: string;
};

type GoogleReviewsProps = {
	title?: string;
	subtitle?: string;
	reviews?: Review[];
};

const defaultReviews: Review[] = [
	{
		name: 'Laura M.',
		rating: 5,
		text: 'Brilliant service from quote to installation. The team were tidy and the new windows have made a huge difference.',
		date: 'Oct 2025',
	},
	{
		name: 'James P.',
		rating: 5,
		text: 'Composite door looks fantastic and feels very secure. Clear communication and on-time fitting.',
		date: 'Sep 2025',
	},
	{
		name: 'Rebecca S.',
		rating: 4,
		text: 'Happy with the conservatory upgrade. Minor snag quickly resolved. Would recommend.',
		date: 'Aug 2025',
	},
];

const GoogleReviews: React.FC<GoogleReviewsProps> = ({
	title = 'Google Reviews',
	subtitle = 'What our customers say',
	reviews = defaultReviews,
}) => {
	const [items, setItems] = React.useState<Review[]>(reviews);
	const [loading, setLoading] = React.useState<boolean>(true);
	const [placeMeta, setPlaceMeta] = React.useState<{ name?: string; url?: string; rating?: number; user_ratings_total?: number } | null>(null);

	React.useEffect(() => {
		let mounted = true;
		(async () => {
			try {
				const res = await fetch('/api/google-reviews');
				if (!res.ok) throw new Error('Network error');
				const data = await res.json();
				if (mounted && data && data.ok && Array.isArray(data.reviews)) {
					const mapped: Review[] = data.reviews.map((r: any) => ({
						name: r.author_name || 'Anonymous',
						rating: r.rating || 0,
						text: r.text || '',
						date: r.relative_time || undefined,
					}));
					setItems(mapped.length ? mapped : reviews);
					setPlaceMeta(data.place || null);
				}
			} catch (e) {
				// keep defaults on error
				setItems(reviews);
			} finally {
				setLoading(false);
			}
		})();
		return () => { mounted = false; };
	}, []);

	return (
		<section className={styles.section} aria-labelledby="google-reviews-title">
			<div className={styles.container}>
				<div className={styles.frame}>
					<header className={styles.header}>
						<h3 id="google-reviews-title" className={styles.title}>
							<span className={styles.titleLight}>{title.split(' ')[0]}</span>
							<span className={styles.titleItalic}> {title.split(' ').slice(1).join(' ')}</span>
						</h3>
						<p className={styles.subtitle}>
							{subtitle}
							{placeMeta?.rating ? (
								<>
									{' · '}
									<strong>{placeMeta.rating.toFixed(1)}</strong>
									{' ('}
									{placeMeta.user_ratings_total}
									{')'}
								</>
							) : null}
						</p>
					</header>

					<div className={styles.grid}>
						{(loading ? reviews : items).map((r, i) => (
							<article key={i} className={styles.card} aria-label={`Review by ${r.name}`}>
								<div className={styles.cardHeader}>
									<div className={styles.avatar} aria-hidden="true" />
									<div className={styles.meta}>
										<div className={styles.name}>{r.name}</div>
										{r.date && <div className={styles.date}>{r.date}</div>}
									</div>
								</div>
								<div className={styles.rating} aria-label={`${r.rating} out of 5 stars`}>
									{Array.from({ length: 5 }).map((_, idx) => (
										<span key={idx} className={idx < r.rating ? styles.starFilled : styles.star} aria-hidden="true">★</span>
									))}
								</div>
								<p className={styles.text}>{r.text}</p>
							</article>
						))}
					</div>

					<div className={styles.actions}>
						<a href={placeMeta?.url || 'https://www.google.com/search?q=Select+Products+Leeds+reviews'} target="_blank" rel="noopener noreferrer" className={styles.button}>
							Read more on Google
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GoogleReviews;
