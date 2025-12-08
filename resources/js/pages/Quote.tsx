import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import styles from './quote.module.css';

const Quote: React.FC = () => {
  const [form, setForm] = useState({
    interest: '',
    when: '',
    postcode: '',
    address: '',
    name: '',
    number: '',
    email: '',
  });

  const [step, setStep] = useState(0);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.interest || !form.when) {
      alert('Please select interest and timeframe before submitting.');
      return;
    }
    try {
      const res = await fetch('/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({} as any));
      if (!res.ok) {
        const msg = (data && (data.message || data.error)) || 'Submission failed';
        throw new Error(msg);
      }
      setShowModal(true);
    } catch (err) {
      alert(String(err));
    }
  };

  const [showModal, setShowModal] = useState(false);
  const onConfirm = () => {
    setShowModal(false);
    try { localStorage.setItem('quoteSuccess', '1'); } catch {}
    router.visit('/');
  };

  return (
    <div className={styles.quotePage}>
      <Header />
      <main className={styles.main}>
        <div className={styles.frame}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.titleLight}>Request a</span> <span className={styles.titleItalic}>Quote</span>
            </h1>
            <p className={styles.subtitle}>
              Answer a few questions so we can help.
              {form.interest && (
                <span className={styles.choicePill} aria-live="polite">Selected: {form.interest} Quote</span>
              )}
            </p>
          </header>
          <div className={styles.body}>
          <form onSubmit={submit} className={styles.stepGrid}>
          {step === 0 && (
            <section aria-label="Choose a product category" className={styles.stepGrid}>
              <span className={styles.centerText} style={{ fontWeight: 600, fontSize: '1rem' }}>What are you interested in?</span>
              <div className={styles.cardGrid}>
                {[
                  {
                    key: 'Windows',
                    title: 'Windows',
                    text: 'Double glazed windows add style, security and energy efficiency to your home.',
                    image: '/images/Hero/dsc9477-1-663x1024.jpg',
                    cta: 'Start Window Quote',
                  },
                  {
                    key: 'Doors',
                    title: 'Doors',
                    text: 'Strong and secure. Choose from a wide range of uPVC, composite and aluminium doors.',
                    image: '/images/Hero/Agate-Grey-Jacobean-Border-768x759-1.webp',
                    cta: 'Start Door Quote',
                  },
                  {
                    key: 'Conservatories',
                    title: 'Conservatories',
                    text: 'Add value to your home and create a brand new living space with a new conservatory.',
                    image: '/images/Hero/p-shaped-conservatory.webp',
                    cta: 'Start Quote',
                  },
                ].map(card => (
                  <article key={card.key} className={styles.card}>
                    <div aria-label={`${card.title} image`} className={styles.cardImg} style={{ backgroundImage: `url(${card.image})` }} />
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <p className={styles.cardText}>{card.text}</p>
                      <button
                        type="button"
                        onClick={() => { setForm(prev => ({ ...prev, interest: card.key })); setStep(1); }}
                        className={styles.cardCta}
                        aria-label={card.cta}
                        title={card.cta}
                      >
                        {card.cta.toUpperCase()}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {step === 1 && (
            <label className={styles.label}>
              <span>When would you like the work done?</span>
              <select name="when" value={form.when} onChange={update} className={styles.select}>
                <option value="">Select timeframe</option>
                <option value="ASAP">ASAP</option>
                <option value="Within 1 Month">Within 1 Month</option>
                <option value="1 Month +">1 Month +</option>
                <option value="Unsure">Unsure</option>
              </select>
            </label>
          )}

          {step === 2 && (
            <>
              <label className={styles.label}>
                <span>Postcode</span>
                <input name="postcode" value={form.postcode} onChange={update} placeholder="e.g., LS1 1AA" className={styles.input} />
              </label>
              <label className={styles.label}>
                <span>Address</span>
                <textarea name="address" value={form.address} onChange={update} rows={3} placeholder="Street, City" className={styles.textarea} />
              </label>
              <label className={styles.label}>
                <span>Name</span>
                <input name="name" value={form.name} onChange={update} className={styles.input} />
              </label>
              <label className={styles.label}>
                <span>Number</span>
                <input name="number" value={form.number} onChange={update} className={styles.input} />
              </label>
              <label className={styles.label}>
                <span>Email</span>
                <input name="email" type="email" value={form.email} onChange={update} className={styles.input} />
              </label>
            </>
          )}

          {step > 0 && (
            <div className={styles.actions}>
              <button type="button" onClick={() => setStep(s => Math.max(0, s - 1))} className={styles.btn}>
                Back
              </button>
              {step === 1 && (
                <button type="button" onClick={() => setStep(2)} className={styles.btnPrimary}>
                  Next
                </button>
              )}
              {step === 2 && (
                <button type="submit" className={styles.btnPrimary}>Submit</button>
              )}
            </div>
          )}
          </form>
          </div>
        </div>
      </main>
      <Footer />
      {showModal && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="quoteModalTitle">
          <div className={styles.modal}>
            <h2 id="quoteModalTitle" className={styles.modalTitle}>Confirm Submission</h2>
            <p className={styles.modalText}>
              We received your {form.interest || 'selected'} quote details. Proceed back to the homepage?
            </p>
            <div className={styles.modalActions}>
              <button type="button" className={styles.btnPrimary} onClick={onConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quote;
