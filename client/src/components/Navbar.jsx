import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'poppins', color: 'black' }}>
        <img
          src="/bundo-logo.png"
          alt="Bundo Logo"
          style={{ height: '40px', marginRight: '0px' }}
        />
        <h2 style={{ margin: 0 }}>UNDO</h2>
      </Link>

      <div>
        <Link to="/register" style={{ marginRight: '1rem', color: 'black', textDecoration: 'none' }}>
          Register
        </Link>
        <Link to="/login" style={{ color: 'black', textDecoration: 'poppins' }}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
