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
    title: 'Qualified Conservatory & Extension Builders',
    text:
      'Create a living space for you and your family to enjoy all year round. Our team will fully project manage the design and build of your dream conservatory or glazed extension. Get your free quote today.',
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
    image: '/images/Hero/shutterstock_1145334395-768x512.jpg',
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
                <p className={styles.cardText}>{item.text}</p>
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
