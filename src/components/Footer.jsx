import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Accenture. All rights reserved.</p>
        <div className="footer-icons">
          <a href="/termos-de-uso">
            <img src="./src/img/icon1.png" alt="Termos de Uso" className="footer-icon" />
          </a>
          <a href="/contato">
            <img src="./src/img/icon2.png" alt="Contato" className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;