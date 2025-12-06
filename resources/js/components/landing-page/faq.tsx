import styles from './faq.module.css';
import { useState, ReactNode } from 'react';

type QA = { q: string; a: string | ReactNode };

const items: QA[] = [
	{
		q: 'Who are Select Products (Yorkshire) Ltd?',
		a: `We are Select Products, a highly reputable, family-run business and experienced double-glazing specialist based in Leeds. We are dedicated to providing high-security, high-performance, and energy-saving windows, doors, conservatories, and extensions at affordable prices across the region.`,
	},
	{
		q: 'What areas do you cover for installation?',
		a: `We are local to Leeds and proudly serve customers across North and West Yorkshire. Our key service areas include Leeds, Harrogate, Pudsey, Wetherby, Horsforth, Yeadon, Otley, Bradford, and Ilkley.`,
	},
	{
		q: 'What are your accreditations and credentials?',
		a: `We believe in complete peace of mind for our customers. We are highly accredited and vetted by industry leaders, including FENSA, a Which? Trusted Trader, Trustmark Registered, Federation of Master Builders (FMB) members, and BFRC Authorised Retailers. We are also backed by HomePro.`,
	},
	{
		q: 'How can I get a free, no-obligation quote?',
		a: `Getting a quote is easy and free! You can use our online quoting engine 24/7 to get an estimated price tailored to your specifications. Alternatively, you can call us directly on 0113 257 8933 or request a virtual appointment with one of our home improvement experts.`,
	},
	{
		q: 'Do you install composite doors?',
		a: `Yes, we are specialists in installing high-performance doors, including the market-leading Rockdoor and Benchmark Composite Doors. Composite doors combine the aesthetics of traditional wood with modern performance, security, and exceptional thermal efficiency.`,
	},
	{
		q: 'What window styles and materials do you offer?',
		a: (
			<span>
				We offer a vast range of styles and materials to suit any home: uPVC (Casement, Tilt and Turn, Sliding Sash, Flush Casement, Bow and Bay), Wooden (Windows and Sliding Sash), and Aluminium Windows. All our windows are sourced from market-leading manufacturers, including products with Planitherm Double Glazing.
			</span>
		),
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
