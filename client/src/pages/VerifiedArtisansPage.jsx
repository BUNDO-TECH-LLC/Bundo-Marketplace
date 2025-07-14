import React, { useEffect, useState } from 'react';

const VerifiedArtisansPage = () => {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/artisans/verified');
        const data = await res.json();
        setArtisans(data);
      } catch (err) {
        console.error('Failed to fetch artisans:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, []);

  if (loading) return <p style={{ paddingTop: 80, textAlign: 'center' }}>Loading artisans...</p>;

  return (
    <div style={{ paddingTop: 80, padding: '2rem' }}>
      <h2>Verified Artisans</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        marginTop: '1rem'
      }}>
        {artisans.map(artisan => (
          <div key={artisan._id} style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px',
            background: '#fff'
          }}>
            <h3>{artisan.name}</h3>
            <p><strong>Service:</strong> {artisan.serviceType}</p>
            <p><strong>Email:</strong> {artisan.email}</p>
            <p><strong>Phone:</strong> {artisan.phone || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerifiedArtisansPage;
