import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-name-logo">
          <h2 className="footer-name">Grigorii Dubrovskii</h2>
        </div>

        <div className="footer-links">
          <a href="https://github.com/DubroffSky" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/grigorii-dubrovskii-prog/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:grigoriidubrovskii.biz@gmail.com">Email</a>
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}