import React, { useEffect, useRef, useState } from 'react';
import { router } from '@inertiajs/react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import styles from './quote.module.css';

const Quote: React.FC = () => {
  const [form, setForm] = useState({
    interest: '',
    when: 'ASAP',
    postcode: '',
    address: '',
    name: '',
    number: '',
    email: '',
  });

  const [step, setStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const numberRef = useRef<HTMLInputElement | null>(null);

  // Prefill from query params and skip early steps if provided
  useEffect(() => {
    try {
      const qs = new URLSearchParams(window.location.search);
      const qInterest = (qs.get('interest') || '').trim();
      const rawWhen = (qs.get('when') || '').trim();
      const normalizeWhen = (w: string) => {
        const v = w.toLowerCase();
        if (v === 'immediately' || v === 'asap') return 'ASAP';
        if (v === '1-3 months' || v === 'within 1 month') return 'Within 1 Month';
        if (v === '3-6 months' || v === '1 month +' || v === '1 month+') return '1 Month +';
        if (v === 'just researching' || v === 'unsure') return 'Unsure';
        return w;
      };
      const qWhen = rawWhen ? normalizeWhen(rawWhen) : '';
      const next: any = {};
      if (qInterest) next.interest = qInterest;
      if (qWhen) next.when = qWhen;
      const qp = (k: string) => (qs.get(k) || '').trim();
      const qpMap = ['postcode','address','name','number','email'] as const;
      qpMap.forEach((k) => { const v = qp(k); if (v) next[k] = v; });
      if (Object.keys(next).length) setForm(prev => ({ ...prev, ...next }));
      if (qInterest) setStep(1);
    } catch {}
  }, []);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.interest) {
      alert('Please select what you are interested in before submitting.');
      return;
    }
    if (!form.number.trim()) {
      setError('Phone number is required');
      setStep(2);
      numberRef.current?.focus();
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
      try { window.history.pushState({}, '', '/leadsubmitted'); } catch {}
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
          <form
            onSubmit={submit}
            className={styles.stepGrid}
            data-quote-form="1"
            data-final-step={step === 1 ? '1' : '0'}
            data-interest={form.interest}
          >
          {step === 0 && (
            <section aria-label="Choose a product category" className={styles.stepGrid}>
              <span className={styles.centerText} style={{ fontWeight: 600, fontSize: '1rem' }}>What are you interested in?</span>
              <div className={styles.cardGrid}>
                {[
                  {
                    key: 'Windows',
                    title: 'Windows',
                    text: 'Double glazed windows add style, security and energy efficiency to your home.',
                    image: '/images/Hero/dsc9477-1-663x1024.webp',
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
                <input
                  name="number"
                  value={form.number}
                  onChange={(e) => { setError(null); update(e); }}
                  className={styles.input}
                  ref={numberRef}
                  inputMode="tel"
                  aria-required="true"
                  aria-invalid={error ? true : undefined}
                />
                {error && (
                  <span role="alert" style={{ color: '#c62828', fontSize: '0.9rem' }}>{error}</span>
                )}
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
