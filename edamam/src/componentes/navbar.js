import React from 'react';
import './navbar.css';

function Nav() {
  return (
    <div className="navbar">
      <div className="left-section">
        <h1>HOY COCINO YO</h1>
      </div>
      <div className="right-section">
        <ul className="menu">
          {/* Agrega elementos de menú aquí */}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
