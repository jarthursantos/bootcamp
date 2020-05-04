import React from 'react';

const logo = require('../assets/facebook.png');

export default function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt='Logo' />
        <strong>Meu perfil</strong>
      </div>
    </header>
  );
}
