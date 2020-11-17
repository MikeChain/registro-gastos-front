import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import { Modal } from './../Modal';
import { RegistroForm } from './../RegistroForm';
import './Header.scss';

export const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const close = () => {
    setIsModalOpen(false);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className='header'>
      <button onClick={() => setIsModalOpen(true)}>
        Nuevo Registro
      </button>

      <button onClick={toggleMenu}>
        Menu
      </button>

      <Navbar isMenuOpen={isMenuOpen} />

      <Modal
        show={isModalOpen}
        handleClose={close}
        title='Nuevo Registro'
      >
        <RegistroForm />
      </Modal>
    </header>
  )
}
