import PayButton from './components/PayButton';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Business Name Generator</h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>
        Find the perfect name for your business
      </p>

      <section style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h2>Free Search</h2>
        <p>Generate business names:</p>
        <input 
          type="text" 
          placeholder="Enter keywords..." 
          style={{ 
            padding: '10px', 
            width: '100%', 
            maxWidth: '300px',
            marginTop: '0.5rem' 
          }}
        />
        <button style={{
          display: 'block',
          marginTop: '1rem',
          padding: '10px 20px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Generate Free
        </button>
      </section>

      <section style={{ marginTop: '2rem', padding: '1.5rem', border: '2px solid #635bff', borderRadius: '8px' }}>
        <h2>Premium Business Report</h2>
        <ul>
          <li>Detailed name analysis</li>
          <li>Domain availability check</li>
          <li>Trademark research</li>
          <li>Numerology & branding</li>
          <li>Logo concepts included</li>
        </ul>
        <PayButton 
          priceId="price_businessnames_premium" 
          label="Get Premium Report - $29.99"
        />
      </section>

      <p style={{ color: '#666', marginTop: '3rem', fontSize: '0.9rem' }}>
        Deployed via Project HACK
      </p>
    </main>
  );
}
