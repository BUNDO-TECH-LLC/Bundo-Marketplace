import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#f9943b',
      color: 'white',
      fontFamily: '"Poppins", sans-serif'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
        <img
          src="/bundo-logo.png"
          alt="Bundo Logo"
          style={{ height: '40px', marginRight: '8px' }}
        />
        <h2 style={{ margin: 0 }}>UNDO</h2>
      </Link>

      <div>
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" style={{ marginRight: '1rem', color: 'black', textDecoration: 'none' }}>
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'black',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register" style={{ marginRight: '1rem', color: 'black', textDecoration: 'none' }}>
              Register
            </Link>
            <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
