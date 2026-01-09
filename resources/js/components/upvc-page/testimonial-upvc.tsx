import styles from './testimonial-upvc.module.css';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import React from 'react';

const TestimonialUpvc = () => {
	const [isMuted, setIsMuted] = React.useState(true);
	return (
		<section className={styles.testimonialSection}>
			<div className={styles.testimonialContainer}>
				<div className={styles.testimonialFrame}>
					<div className={styles.contentGrid}>
						<div className={styles.leftCol}>
							<h3 className={styles.title}>
								<span className={styles.titleLight}>Customer</span>
								<span className={styles.titleItalic}> Video Testimonial</span>
							</h3>
							<p className={styles.intro}>
								<span className={styles.introEmphasis}>Customer Testimonial for New <span className={styles.introHighlight}>hup!</span> System in Leeds</span>
								At Select Products, we focus on <span className={styles.introHighlight}>high security</span>, <span className={styles.introHighlight}>high-performance</span>, <span className={styles.introHighlight}>energy-saving</span> products and a service that you can rely on. We make sure our customers have a full range of technically advanced home improvement products to choose from.
								<br /><br />
								Whether you are looking for new uPVC windows, doors or even a stunning new glazed extension or conservatory, we are dedicated to making sure you are getting the best service and products for your Leeds home.
							</p>
							<div className={styles.ctaRow}>
								<Link href="/quote" aria-label="Free Quote">
									<Button className={styles.primaryBtn}>Free Quote</Button>
								</Link>
							</div>
						</div>
						<div className={styles.rightCol}>
							<div className={styles.videoWrap}>
								<div className={styles.videoContainer}>
									<video
										id="testimonialVideo"
										controls
										autoPlay
										muted={isMuted}
										playsInline
										className={styles.video}
										aria-label="Customer video testimonial"
									>
										<source src="/images/videos/hup-Case-Study-Lee_Select-Products.mp4" type="video/mp4" />
										Your browser does not support the video tag.
									</video>
									<button
										type="button"
										className={styles.unmuteBtn}
										aria-label={isMuted ? 'Unmute video' : 'Mute video'}
										onClick={() => {
											const v = document.getElementById('testimonialVideo') as HTMLVideoElement | null;
											if (v) {
												const nextMuted = !isMuted;
												v.muted = nextMuted;
												if (!nextMuted) { v.volume = 1; v.play().catch(() => {}); }
												setIsMuted(nextMuted);
											}
										}}
									>
										{isMuted ? 'Unmute' : 'Mute'}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialUpvc;
