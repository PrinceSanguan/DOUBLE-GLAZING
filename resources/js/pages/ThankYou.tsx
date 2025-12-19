import React from 'react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

const ThankYou: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, display: 'grid', placeItems: 'center', padding: '32px' }}>
        <div style={{ width: '100%', maxWidth: 680, background: '#ffffff', borderRadius: 16, boxShadow: '0 8px 24px rgba(16,16,20,0.12)', border: '1px solid #e6e7ea', padding: 24 }}>
          <h1 style={{ margin: 0, fontSize: '1.75rem' }}>Thank You</h1>
          <p style={{ marginTop: 8, color: '#3a3f4b' }}>We0ve received your request and will be in touch shortly.</p>
          <a href="/" style={{ display: 'inline-flex', marginTop: 12, padding: '10px 16px', borderRadius: 8, background: '#0a6b90', color: '#fff', textDecoration: 'none' }}>Back to Home</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
