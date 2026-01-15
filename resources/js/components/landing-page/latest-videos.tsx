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
	const [loadedVideos, setLoadedVideos] = React.useState<Set<number>>(new Set());

	const handlePlayClick = (index: number) => {
		setLoadedVideos(prev => new Set(prev).add(index));
	};

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
									{!loadedVideos.has(i) ? (
										<div
											style={{
												position: 'relative',
												cursor: 'pointer',
												width: '100%',
												height: '100%',
											}}
											onClick={() => handlePlayClick(i)}
										>
											<img
												className={styles.video}
												src={`https://i.ytimg.com/vi/${getVideoId(v.src)}/hqdefault.jpg`}
												alt={v.title}
												loading="lazy"
												decoding="async"
												style={{
													width: '100%',
													height: '100%',
													objectFit: 'cover',
												}}
											/>
											<div
												style={{
													position: 'absolute',
													top: '50%',
													left: '50%',
													transform: 'translate(-50%, -50%)',
													width: '68px',
													height: '48px',
													background: 'rgba(255, 0, 0, 0.9)',
													borderRadius: '12px',
													transition: 'background 0.2s',
												}}
												onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 0, 0, 1)')}
												onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 0, 0, 0.9)')}
											>
												<svg
													width="68"
													height="48"
													viewBox="0 0 68 48"
													fill="none"
												>
													<path d="M 26 17 L 40 24 L 26 31 Z" fill="#fff" />
												</svg>
											</div>
										</div>
									) : (
										<iframe
											className={styles.video}
											src={`${toEmbedUrl(v.src)}?autoplay=1`}
											title={v.title}
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen
										/>
									)}
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

// Helper: extract video ID from YouTube URL
function getVideoId(url: string): string {
	try {
		const u = new URL(url);
		const v = u.searchParams.get('v');
		if (v) return v;
		// Handle short URLs like youtu.be/xxxxx
		const path = u.pathname.split('/');
		return path[path.length - 1];
	} catch {
		return '';
	}
}

export default LatestVideos;

