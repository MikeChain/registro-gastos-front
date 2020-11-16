import React from 'react';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__menu'>
        <li>Dash</li>
        <li>Movimientos</li>
        <li>Catálogos</li>
        <li>Salir</li>
      </ul>
    </nav>
  )
}
