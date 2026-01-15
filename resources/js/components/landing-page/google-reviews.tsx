import React from 'react';
import styles from './google-reviews.module.css';

const ELFSIGHT_SRC = 'https://elfsightcdn.com/platform.js';
const ELFSIGHT_APP_CLASS = 'elfsight-app-b8e15738-3700-4660-b729-c75bcecdae5b';

const GoogleReviews: React.FC = () => {
  React.useEffect(() => {
	// Defer Elfsight script loading by 2 seconds to prioritize page content
	const timer = setTimeout(() => {
	  const exists = document.querySelector(`script[src="${ELFSIGHT_SRC}"]`);
	  if (!exists) {
		const s = document.createElement('script');
		s.src = ELFSIGHT_SRC;
		s.async = true;
		s.defer = true;
		document.body.appendChild(s);
	  }
	}, 2000);
	return () => clearTimeout(timer);
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
