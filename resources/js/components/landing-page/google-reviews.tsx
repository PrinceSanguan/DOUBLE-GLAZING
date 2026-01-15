import React from 'react';
import styles from './google-reviews.module.css';

const ELFSIGHT_SRC = 'https://elfsightcdn.com/platform.js';
const ELFSIGHT_APP_CLASS = 'elfsight-app-b8e15738-3700-4660-b729-c75bcecdae5b';

const GoogleReviews: React.FC = () => {
  React.useEffect(() => {
	// Load Elfsight when section is near viewport for optimal timing
	const section = document.querySelector('[aria-label="Google Reviews"]');
	if (!section) {
	  // Fallback: load after 1 second if section not found
	  const timer = setTimeout(() => {
		const exists = document.querySelector(`script[src="${ELFSIGHT_SRC}"]`);
		if (!exists) {
		  const s = document.createElement('script');
		  s.src = ELFSIGHT_SRC;
		  s.async = true;
		  s.defer = true;
		  document.body.appendChild(s);
		}
	  }, 1000);
	  return () => clearTimeout(timer);
	}

	// Use IntersectionObserver for better loading
	const observer = new IntersectionObserver((entries) => {
	  if (entries[0].isIntersecting) {
		const exists = document.querySelector(`script[src="${ELFSIGHT_SRC}"]`);
		if (!exists) {
		  const s = document.createElement('script');
		  s.src = ELFSIGHT_SRC;
		  s.async = true;
		  s.defer = true;
		  document.body.appendChild(s);
		}
		observer.disconnect();
	  }
	}, { rootMargin: '50px' });

	observer.observe(section);
	return () => observer.disconnect();
  }, []);

  return (
	<section className={styles.section} aria-label="Google Reviews">
	  <div className={styles.container}>
				<div className={styles.frame}>
					<div className={styles.embed}>
						{/* Elfsight embed container */}
						<div className={ELFSIGHT_APP_CLASS} data-elfsight-app-lazy></div>
					</div>
				</div>
	  </div>
	</section>
  );
};

export default GoogleReviews;
