import React, { useState } from 'react';
import { Modal } from './components/Modal';
import { RegistroForm } from './components/RegistroForm';
import { Toast } from './components/Toast';
import { ToastProvider } from './context/ToastContext';
import './index.scss';

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const close = () => {
    setIsModalOpen(false);
  }

  return (
    <ToastProvider>

      <button onClick={() => setIsModalOpen(true)}>
        Nuevo Registro
      </button>

      <Modal
        show={isModalOpen}
        handleClose={close}
        title='Nuevo Registro'
      >
        <RegistroForm />
      </Modal>

      <Toast
        position='bottom-right'
        autoDelete={true}
        dismissTime={3}
      />

    </ToastProvider>
  );
}

export default App;
