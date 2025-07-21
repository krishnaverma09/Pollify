import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Pollify</h2>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Pollify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
