import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [pendingArtisans, setPendingArtisans] = useState([]);

  const fetchPending = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/artisans/pending', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPendingArtisans(res.data.artisans);
    } catch (err) {
      console.error('Error fetching pending artisans', err);
    }
  };

  const approveArtisan = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`http://localhost:5000/api/artisans/approve/${id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Refresh list
      fetchPending();
    } catch (err) {
      console.error('Error approving artisan', err);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Admin Dashboard</h2>
      {pendingArtisans.length === 0 ? (
        <p>No pending artisans</p>
      ) : (
        pendingArtisans.map(artisan => (
          <div key={artisan._id} style={{
            border: '1px solid #ccc',
            marginBottom: '1rem',
            padding: '1rem',
            borderRadius: '8px'
          }}>
            <h3>{artisan.name}</h3>
            <p>Email: {artisan.email}</p>
            <p>Service: {artisan.serviceType}</p>
            <button onClick={() => approveArtisan(artisan._id)}>
              ✅ Approve
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;
