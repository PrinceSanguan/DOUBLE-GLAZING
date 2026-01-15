import React from 'react';
import styles from './features.module.css';

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
      'Enhance the style and security of your home with a bespoke front door. Composite doors combine traditional aesthetics with modern performance. It’s sure to impress! To talk to us about a free double glazing quote, get in touch with the friendly team at Select Products today.',
    image: '/images/Hero/Agate-Grey-Jacobean-Border-768x759-1.webp',
    leftLabel: 'Get Free Quote',
    leftHref: '/quote',
    rightLabel: 'Call Now: 01132578933',
    rightHref: 'tel:01132578933',
  },
  {
    title: 'uPVC Windows & Doors',
    text:
      'Upgrade your home with energy-efficient uPVC windows and doors. Our A-rated double glazing reduces heating bills by up to 30%, eliminates draughts, and dramatically cuts noise pollution. Available in various styles and colours, all installed by Which?-approved local experts with a 10-year insurance-backed guarantee.',
    image: '/images/Hero/p-shaped-conservatory.webp',
    leftLabel: 'Get Free Quote',
    leftHref: '/quote',
    rightLabel: 'Call Now: 01132578933',
    rightHref: 'tel:01132578933',
  },
  {
    title: 'Double Glazing Specialists In Leeds',
    text:
      'Local family-run business for high security, A-rated windows and doors in uPVC, timber and aluminium. Proudly serving Leeds, Pudsey, Horsforth, Cookridge and across West & North Yorkshire. Request your FREE no-obligation online quote 24/7. Discuss your project today with our home improvement experts.',
    image: '/images/Hero/shutterstock_1145334395-768x512.webp',
    leftLabel: 'Get Free Quote',
    leftHref: '/quote',
    rightLabel: 'Call Now: 01132578933',
    rightHref: 'tel:01132578933',
  },
];

const Features: React.FC = () => {
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

export default Features;
