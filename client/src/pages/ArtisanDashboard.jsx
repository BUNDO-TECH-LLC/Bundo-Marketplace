import { useEffect, useState } from 'react';
import axios from 'axios';

const ArtisanDashboard = () => {
  const [artisan, setArtisan] = useState(null);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/artisans/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setArtisan(res.data);
    } catch (err) {
      console.error('Error fetching artisan profile', err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!artisan) return <p>Loading profile...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome, {artisan.user?.name || 'Artisan'}</h2>
      <p><strong>Email:</strong> {artisan.user?.email}</p>
      <p><strong>Service:</strong> {artisan.serviceType}</p>
      <p><strong>Bio:</strong> {artisan.bio}</p>
      <p><strong>Location:</strong> {artisan.location}</p>
      <p><strong>Phone:</strong> {artisan.phone}</p>
      <p>
        <strong>Status:</strong>{' '}
        {artisan.isVerified ? (
          <span style={{ color: 'green' }}>✅ Verified</span>
        ) : (
          <span style={{ color: 'orange' }}>⏳ Pending Approval</span>
        )}
      </p>
    </div>
  );
};

export default ArtisanDashboard;
