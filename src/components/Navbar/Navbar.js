import React from 'react';
import PropTypes from 'prop-types'
import './Navbar.scss';

export const Navbar = ({ isMenuOpen }) => {
  return (
    <nav className={`navbar ${isMenuOpen ? 'abierto' : 'cerrado'}`}>
      <ul className='navbar__menu'>
        <li>Dash</li>
        <li>Movimientos</li>
        <li>Catálogos</li>
        <li>Salir</li>
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
}