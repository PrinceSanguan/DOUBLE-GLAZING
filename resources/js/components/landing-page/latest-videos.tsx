import React from 'react';
import styles from './latest-videos.module.css';

type VideoItem = {
	title: string;
	src: string; // Use full YouTube watch URL
};

const videos: VideoItem[] = [
	{ title: 'Select Products — hup! System Case Study', src: 'https://www.youtube.com/watch?v=FH4KhzmQ0hI' },
	{ title: 'Installation Highlight', src: 'https://www.youtube.com/watch?v=XIUyY6-REUg' },
	{ title: 'Product Spotlight', src: 'https://www.youtube.com/watch?v=B0bMNukLDAM' },
	{ title: 'Project Walkthrough', src: 'https://www.youtube.com/watch?v=c7I5m2I5KPA' },
	{ title: 'Customer Story', src: 'https://www.youtube.com/watch?v=teijdQq9rSY' },
];

const LatestVideos: React.FC = () => {
	return (
		<section className={styles.section} aria-labelledby="latest-videos-title">
			<div className={styles.container}>
				<div className={styles.frame}>
					<header className={styles.header}>
						<h3 id="latest-videos-title" className={styles.title}>
							<span className={styles.titleLight}>Latest</span>
							<span className={styles.titleItalic}> Videos</span>
						</h3>
						<p className={styles.subtitle}>Recent installations and product highlights.</p>
					</header>
					<div className={styles.grid}>
						{videos.map((v, i) => (
							<article key={i} className={styles.card}>
								<div className={styles.mediaWrap}>
									<iframe
										className={styles.video}
										src={toEmbedUrl(v.src)}
										title={v.title}
										loading="lazy"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowFullScreen
									/>
								</div>
								<div className={styles.caption}>{v.title}</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

// Helper: convert watch URL to privacy-enhanced embed URL
function toEmbedUrl(url: string): string {
	try {
		const u = new URL(url);
		const v = u.searchParams.get('v');
		if (v) return `https://www.youtube-nocookie.com/embed/${v}`;
		// Fallback for already-embed or short URLs
		return url.replace('www.youtube.com/watch?v=', 'www.youtube-nocookie.com/embed/');
	} catch {
		return url;
	}
}

export default LatestVideos;

