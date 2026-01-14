import React from 'react';
import styles from './features-composite.module.css';

type Feature = {
  title: string;
  text: string;
  image: string;
  leftLabel: string;
  leftHref: string;
  rightLabel: string;
  rightHref: string;
};

const items: readonly Feature[] = [
  {
    title: 'Composite Door Installers In Leeds',
    text:
      'Enhance the style and security of your home with a bespoke front door. Composite doors combine <strong>traditional aesthetics with modern performance</strong>. It\'s sure to impress! To talk to us about a <strong>free double glazing quote</strong>, get in touch with the friendly team at Select Products today.',
    image: '/images/Hero/Agate-Grey-Jacobean-Border-768x759-1.webp',
    leftLabel: 'Get Free Quote',
    leftHref: '/quote',
    rightLabel: 'Call Now: 01132578933',
    rightHref: 'tel:01132578933',
  },
  {
    title: 'uPVC Windows & Doors',
    text:
      'Upgrade your home with <strong>energy-efficient uPVC windows and doors</strong>. Our <strong>A-rated double glazing reduces heating bills by up to 30%</strong>, eliminates draughts, and dramatically cuts noise pollution. Available in various styles and colours, all installed by <strong>Which?-approved local experts</strong> with a <strong>10-year insurance-backed guarantee</strong>.',
    image: '/images/Hero/p-shaped-conservatory.webp',
    leftLabel: 'Get Free Quote',
    leftHref: '/quote',
    rightLabel: 'Call Now: 01132578933',
    rightHref: 'tel:01132578933',
  },
  {
    title: 'Double Glazing Specialists In Leeds',
    text:
      'Local family-run business for <strong>high security, A-rated windows and doors</strong> in uPVC, timber and aluminium. Proudly serving Leeds, Pudsey, Horsforth, Cookridge and across West & North Yorkshire. Request your <strong>FREE no-obligation online quote 24/7</strong>. Discuss your project today with our home improvement experts.',
    image: '/images/Hero/shutterstock_1145334395-768x512.jpg',
    leftLabel: 'Get Free Quote',
    leftHref: '/quote',
    rightLabel: 'Call Now: 01132578933',
    rightHref: 'tel:01132578933',
  },
];

const FeaturesComposite: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Featured Services">
      <div className={styles.container}>
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <article className={styles.card} key={idx} aria-label={item.title}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${item.image})` }}
                aria-label={`${item.title} image`}
              />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText} dangerouslySetInnerHTML={{ __html: item.text }} />
                <div className={styles.cardFooter}>
                  <a
                    href={item.leftHref}
                    className={styles.cardAction}
                    aria-label={item.leftLabel}
                    title={item.leftLabel}
                  >
                    {item.leftLabel}
                  </a>
                  <a
                    href={item.rightHref}
                    className={styles.cardActionSecondary}
                    aria-label={item.rightLabel}
                    title={item.rightLabel}
                  >
                    {item.rightLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesComposite;
