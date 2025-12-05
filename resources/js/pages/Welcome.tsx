
import { Head } from '@inertiajs/react';
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
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Header />
            <main style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
                <Hero />
                <AboutSection />
                <WhyUs />
                <Product />
                <Testimonial />
                <Faq />
                <Cta />
                <FinalCta />
            </main>
            <Footer />
        </>
    );
}
