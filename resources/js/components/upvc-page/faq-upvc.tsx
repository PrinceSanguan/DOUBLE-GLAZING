import styles from './faq-upvc.module.css';
import { useState, ReactNode } from 'react';

type QA = { q: string; a: string | ReactNode };

const items: QA[] = [
  {
    q: 'How long do uPVC windows last?',
    a: `High-quality uPVC windows typically last 20–25 years or more when properly manufactured and professionally installed. Our installations are backed by a 10-year insurance-backed guarantee for complete peace of mind.`,
  },
  {
    q: 'Are uPVC windows energy efficient?',
    a: `Yes. Modern uPVC windows are designed with A-rated thermal performance, helping to reduce heat loss, eliminate draughts, and lower energy bills throughout the year.`,
  },
  {
    q: 'How secure are uPVC windows?',
    a: `Our uPVC windows come with multi-point locking systems and reinforced frames as standard, meeting recognised British security standards to help protect your home.`,
  },
  {
    q: 'Do uPVC windows require much maintenance?',
    a: `No. uPVC is low-maintenance and weather-resistant. Occasional cleaning is all that’s required, no painting, sanding, or sealing needed.`,
  },
  {
    q: 'Can uPVC windows be fitted to older or period homes?',
    a: `Yes. uPVC windows are available in a range of styles and finishes to suit traditional, period, and modern properties, while maintaining character and performance.`,
  },
  {
    q: 'Are uPVC windows suitable for conservation areas?',
    a: `In some cases, yes. Requirements vary by local authority. We’ll advise you on planning considerations and suitable options if you live in a conservation area.`,
  },
  {
    q: 'How much do uPVC windows cost?',
    a: `Costs vary depending on size, style, glazing and the number of windows. We provide clear, no-obligation quotes tailored to your home with no hidden charges.`,
  },
];

const FaqUpvc = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

	return (
		<section className={styles.faqSection} id="faq">
			<div className={styles.faqContainer}>
				<div className={styles.faqFrame}>
					<header className={styles.faqHeader}>
						<h3 className={styles.title}>
							<span className={styles.titleLight}>Frequently Asked</span>
							<span className={styles.titleItalic}> Questions</span>
						</h3>
					</header>
					<div className={styles.faqList}>
						{items.map((item, i) => (
							<div className={`${styles.faqItem} ${openIndex === i ? styles.open : ''}`} key={i}>
								<button className={styles.faqQ} onClick={() => toggle(i)} aria-expanded={openIndex === i} aria-controls={`faq-a-${i}`}>
									{item.q}
									<span className={styles.faqToggle}>{openIndex === i ? '−' : '+'}</span>
								</button>
								{openIndex === i && (
									<div id={`faq-a-${i}`} className={styles.faqA}>{item.a}</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FaqUpvc;
