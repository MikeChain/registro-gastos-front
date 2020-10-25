import React, { useState } from 'react';
import { Modal } from './components/Modal';
import { RegistroForm } from './components/RegistroForm';
import './index.scss';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const close = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="App">

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

    </div>
  );
}

export default App;
