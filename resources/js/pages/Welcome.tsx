
import { Head } from '@inertiajs/react';
import React from 'react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import Hero from '@/components/landing-page/hero';
import AboutSection from '@/components/landing-page/about-section';
import WhyUs from '@/components/landing-page/why-us';
import Product from '@/components/landing-page/product';
import Testimonial from '@/components/landing-page/testimonial';
import Faq from '@/components/landing-page/faq';
import Cta from '@/components/landing-page/cta';
import FinalCta from '@/components/landing-page/final-cta';

export default function Welcome() {
    const [showToast, setShowToast] = React.useState(false);
    React.useEffect(() => {
        try {
            const flag = localStorage.getItem('quoteSuccess');
            if (flag === '1') {
                setShowToast(true);
                localStorage.removeItem('quoteSuccess');
            }
        } catch {}
    }, []);
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Header />
            <main style={{ margin: 0, padding: 0, overflow: 'hidden', flex: 1 }}>
                {showToast && (
                    <div
                        role="status"
                        aria-live="polite"
                        style={{
                            position: 'fixed', top: 16, right: 16, zIndex: 50,
                            background: '#fff', border: '1px solid var(--brand-blue)',
                            boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
                            borderRadius: '0.75rem', padding: '10px 14px',
                            display: 'flex', alignItems: 'center', gap: 8,
                        }}
                    >
                        <span style={{
                            display: 'inline-block', width: 8, height: 8,
                            background: 'var(--brand-blue)', borderRadius: 9999,
                        }} />
                        <span style={{ color: '#101014', fontWeight: 600 }}>Quote submitted successfully</span>
                        <button
                            onClick={() => setShowToast(false)}
                            style={{
                                marginLeft: 10, color: 'var(--brand-blue)',
                                background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 600,
                            }}
                            aria-label="Dismiss"
                        >
                            Dismiss
                        </button>
                    </div>
                )}
                <Hero />
                <AboutSection />
                <WhyUs />
                <Product />
                   <Cta />
                <Testimonial />
                <Faq />
             
                <FinalCta />
            </main>
            <Footer />
        </div>
    );
}
