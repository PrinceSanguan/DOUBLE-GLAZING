import styles from './faq.module.css';
import { useState, ReactNode } from 'react';

type QA = { q: string; a: string | ReactNode };

const items: QA[] = [
	{
		q: 'How much does double glazing cost in Leeds?',
		a: `Every home is different. Most Leeds homes spend between £X–£X for a full installation. We'll give you a clear, itemised quote with no surprises.`,
	},
	{
		q: 'How long does installation take?',
		a: `Most homes are completed in 1–2 days. Larger projects (conservatories, extensions) take longer, but we'll give you a clear timeline upfront.`,
	},
	{
		q: 'Will installation disrupt my home?',
		a: `We work cleanly and efficiently. Most customers say they're surprised how little of a mess we make. We tidy up as we go.`,
	},
	{
		q: 'Do you cover my area?',
		a: `We serve Leeds, Pudsey, Horsforth, Cookridge, and across North & West Yorkshire. Enter your postcode above to confirm.`,
	},
	{
		q: `What if I'm not happy?`,
		a: `We won't leave until you're satisfied. And if something goes wrong later, our 10-year guarantee has you covered.`,
	},
];

const Faq = () => {
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

export default Faq;
