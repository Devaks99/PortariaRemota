import React from 'react';
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Logo à esquerda */}
      <div className="logo">
        <img src="./src/img/Logo and Search.png" alt="Portaria Remota" className="logo-image" />
      </div>

      {/* Conteúdo à direita (usuário e botão de logout) */}
      <div className="right-content">
        <div className="user-info">
          <span className="user-name">Ana Karla</span>
          <img className='fotologin' src="./src/img/foto ana.jpg" alt="foto ana" />
        </div>
        <button className="logout-button">Sair</button>
      </div>
    </header>
  );
};

export default Header;