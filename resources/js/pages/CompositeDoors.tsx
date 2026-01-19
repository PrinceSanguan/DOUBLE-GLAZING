import { Head } from '@inertiajs/react';
import React from 'react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import WhatsAppFloat from '@/components/ui/whatsapp-float';
import HeroComposite from '@/components/composite-doors-page/hero-composite';
import FeaturesComposite from '@/components/composite-doors-page/features-composite';
import AboutSectionComposite from '@/components/composite-doors-page/about-section-composite';
import GoogleReviewsComposite from '@/components/composite-doors-page/google-reviews-composite';
import TrustedClientsComposite from '@/components/composite-doors-page/trusted-clients-composite';
import WhyUsComposite from '@/components/composite-doors-page/why-us-composite';
import ProductComposite from '@/components/composite-doors-page/product-composite';
import TestimonialComposite from '@/components/composite-doors-page/testimonial-composite';
import FaqComposite from '@/components/composite-doors-page/faq-composite';
import CtaComposite from '@/components/composite-doors-page/cta-composite';
import FinalCtaComposite from '@/components/composite-doors-page/final-cta-composite';
import LatestVideosComposite from '@/components/composite-doors-page/latest-videos-composite';

export default function CompositeDoors() {
    const [showToast, setShowToast] = React.useState(false);
    const [showOfferModal, setShowOfferModal] = React.useState(false);
    
    React.useEffect(() => {
        try {
            const flag = localStorage.getItem('quoteSuccess');
            if (flag === '1') {
                setShowToast(true);
                localStorage.removeItem('quoteSuccess');
            }
        } catch {}
        
        // Show offer modal after 1 second
        const timer = setTimeout(() => {
            setShowOfferModal(true);
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Head title="Composite Doors - Select Products">
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
                    <HeroComposite />
                    <FeaturesComposite />
                    <GoogleReviewsComposite />
                    <AboutSectionComposite />
                    <WhyUsComposite />
                    <ProductComposite />
                    <TrustedClientsComposite />
                     <CtaComposite />
                     <TestimonialComposite />
                     <FaqComposite />
                     <FinalCtaComposite />
                     <LatestVideosComposite />
            </main>
            <Footer />
            <WhatsAppFloat />
            
            {/* Offer Modal */}
            {showOfferModal && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(16,16,20,0.65)',
                        backdropFilter: 'blur(6px)',
                        zIndex: 9999,
                        display: 'grid',
                        placeItems: 'center',
                        padding: '16px',
                    }}
                    onClick={() => setShowOfferModal(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="offerModalTitle"
                >
                    <div
                        style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                            borderRadius: '20px',
                            maxWidth: '560px',
                            width: '100%',
                            padding: 'clamp(24px, 5vw, 40px)',
                            boxShadow: '0 24px 64px rgba(0,0,0,0.25)',
                            border: '2px solid var(--brand-blue)',
                            position: 'relative',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setShowOfferModal(false)}
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                border: '1px solid rgba(0,0,0,0.12)',
                                background: 'rgba(255,255,255,0.9)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '20px',
                                color: '#666',
                            }}
                            aria-label="Close offer"
                        >
                            ×
                        </button>
                        
                        {/* Content */}
                        <div style={{ textAlign: 'center' }}>
                            <h2
                                id="offerModalTitle"
                                style={{
                                    fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                                    fontWeight: 700,
                                    color: '#101014',
                                    marginBottom: '12px',
                                    lineHeight: 1.2,
                                }}
                            >
                                Wait! Don't Miss This Composite Door Offer
                            </h2>
                            
                            <p
                                style={{
                                    fontSize: 'clamp(0.95rem, 3vw, 1.05rem)',
                                    color: '#3a3f4b',
                                    marginBottom: '24px',
                                    lineHeight: 1.5,
                                }}
                            >
                                High-security composite doors with 10-year guarantee. Ultion lock included. We won’t be beaten.
                            </p>
                            
                            <div
                                style={{
                                    background: 'transparent',
                                    borderRadius: '16px',
                                    padding: 'clamp(20px, 4vw, 28px)',
                                    marginBottom: '24px',
                                    border: '2px solid var(--brand-blue)',
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
                                        fontWeight: 800,
                                        color: 'var(--brand-blue)',
                                        marginBottom: '8px',
                                        textShadow: 'none',
                                    }}
                                >
                                    £100 OFF Composite Doors Today
                                </div>
                                <div
                                    style={{
                                        fontSize: 'clamp(1.1rem, 4vw, 1.35rem)',
                                        fontWeight: 600,
                                        color: '#3a3f4b',
                                    }}
                                >
                                    Up To 25% Off Composite Doors
                                </div>
                            </div>
                            
                            <a
                                href="/quote?interest=Composite Doors"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    background: 'linear-gradient(135deg, #0a6b90, #4cb5e7)',
                                    color: '#ffffff',
                                    fontSize: 'clamp(1rem, 3.5vw, 1.1rem)',
                                    fontWeight: 700,
                                    padding: 'clamp(14px, 3vw, 18px) clamp(28px, 6vw, 40px)',
                                    borderRadius: '12px',
                                    textDecoration: 'none',
                                    border: 'none',
                                    boxShadow: '0 6px 20px rgba(10,107,144,0.4)',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #4cb5e7, #0a6b90)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 10px 28px rgba(10,107,144,0.5)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #0a6b90, #4cb5e7)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(10,107,144,0.4)';
                                }}
                            >
                                Claim My £100 Saving
                                <span style={{ fontSize: '1.2em' }}>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
