import { Head } from '@inertiajs/react';
import React from 'react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import WhatsAppFloat from '@/components/ui/whatsapp-float';
import HeroUpvc from '@/components/upvc-page/hero-upvc';
import FeaturesUpvc from '@/components/upvc-page/features-upvc';
import AboutSectionUpvc from '@/components/upvc-page/about-section-upvc';
import GoogleReviewsUpvc from '@/components/upvc-page/google-reviews-upvc';
import TrustedClientsUpvc from '@/components/upvc-page/trusted-clients-upvc';
import WhyUsUpvc from '@/components/upvc-page/why-us-upvc';
import ProductUpvc from '@/components/upvc-page/product-upvc';
import TestimonialUpvc from '@/components/upvc-page/testimonial-upvc';
import FaqUpvc from '@/components/upvc-page/faq-upvc';
import CtaUpvc from '@/components/upvc-page/cta-upvc';
import FinalCtaUpvc from '@/components/upvc-page/final-cta-upvc';
import LatestVideosUpvc from '@/components/upvc-page/latest-videos-upvc';

export default function UpvcPage() {
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
            <Head title="uPVC Windows & Doors - Select Products">
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
                    <HeroUpvc />
                    <FeaturesUpvc />
                    <GoogleReviewsUpvc />
                    <AboutSectionUpvc />
                    <WhyUsUpvc />
                    <ProductUpvc />
                    <TrustedClientsUpvc />
                     <CtaUpvc />
                     <TestimonialUpvc />
                     <FaqUpvc />
                     <FinalCtaUpvc />
                     <LatestVideosUpvc />
            </main>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
}
