import styles from './faq-composite.module.css';
import { useState, ReactNode } from 'react';

type QA = { q: string; a: string | ReactNode };

const items: QA[] = [
  {
    q: 'Is this actually secure enough to protect my home and family?',
    a: `Yes, security is the core purpose of a composite door.\nOur doors feature a solid reinforced core, anti-snap multi-point locking, and toughened safety glass. All installations meet PAS 24 British security standards, giving you real, not cosmetic, protection.`,
  },
  {
    q: 'Will it look right on my home or cheap over time?',
    a: `Your door is made to suit your property.\nChoose from premium colours, authentic woodgrain finishes, elegant glazing, and high-quality hardware. Composite doors retain their appearance for decades with no warping, fading, or peeling like cheaper alternatives.`,
  },
  {
    q: 'Will this help with heat loss and energy bills?',
    a: `Yes. Composite doors are highly insulated by design.\nTheir dense core and tight seals reduce draughts and heat escape, helping keep your home warmer and more energy-efficient especially during colder Leeds winters.`,
  },
  {
    q: 'How long will it last and what’s the guarantee?',
    a: `A quality composite door typically lasts 20–30+ years.\nEvery installation comes with a 10-year insurance-backed guarantee, covering both the product and workmanship for complete peace of mind.`,
  },
  {
    q: 'How disruptive is installation and who will be in my home?',
    a: `Installation is quick and controlled.\nMost doors are fitted in one day by our vetted, local installers. We work cleanly, respect your home, and leave everything tidy once the job is complete.`,
  },
  {
    q: 'Is the quote genuinely free or will I be pressured to buy?',
    a: `You’ll receive clear pricing, honest advice, and zero pressure. Take your time, we're here when you’re ready.`,
  },
];

const FaqComposite = () => {
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

export default FaqComposite;
