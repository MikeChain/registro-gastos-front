import React, { useState } from 'react';
import { Modal } from './components/Modal';
import './index.scss';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const close = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="App">

      <button onClick={() => setIsModalOpen(true)}>
        Abrir Modal
      </button>

      <Modal
        show={isModalOpen}
        handleClose={close}
        title='Hola Mundo'
      >
        <h2>Cosas</h2>
      </Modal>

    </div>
  );
}

export default App;
