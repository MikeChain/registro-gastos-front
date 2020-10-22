import React, { useState } from 'react';
import { Modal } from './components/Modal';
import './styles/app.scss';

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

      <Modal show={isModalOpen} handleClose={close}>
        <h2>Cosas</h2>
      </Modal>

      <p>Ea cupidatat cillum elit labore officia mollit.</p>
      <p>Veniam excepteur Lorem incididunt aliqua occaecat sunt ullamco eu quis. Dolore magna aute cillum exercitation exercitation sunt magna. Ullamco enim irure aliqua cupidatat deserunt pariatur deserunt cillum. Enim consectetur pariatur tempor ad consequat id eiusmod excepteur duis ea incididunt. Ea consequat pariatur ea nisi duis Lorem officia et nulla. Cupidatat dolore fugiat voluptate dolore deserunt quis deserunt. Nostrud nostrud amet ex est est nisi ad commodo irure irure cupidatat.</p>
      <p>Ea cupidatat cillum elit labore officia mollit.</p>
      <p>Veniam excepteur Lorem incididunt aliqua occaecat sunt ullamco eu quis. Dolore magna aute cillum exercitation exercitation sunt magna. Ullamco enim irure aliqua cupidatat deserunt pariatur deserunt cillum. Enim consectetur pariatur tempor ad consequat id eiusmod excepteur duis ea incididunt. Ea consequat pariatur ea nisi duis Lorem officia et nulla. Cupidatat dolore fugiat voluptate dolore deserunt quis deserunt. Nostrud nostrud amet ex est est nisi ad commodo irure irure cupidatat.</p>
      <p>Ea cupidatat cillum elit labore officia mollit.</p>
      <p>Veniam excepteur Lorem incididunt aliqua occaecat sunt ullamco eu quis. Dolore magna aute cillum exercitation exercitation sunt magna. Ullamco enim irure aliqua cupidatat deserunt pariatur deserunt cillum. Enim consectetur pariatur tempor ad consequat id eiusmod excepteur duis ea incididunt. Ea consequat pariatur ea nisi duis Lorem officia et nulla. Cupidatat dolore fugiat voluptate dolore deserunt quis deserunt. Nostrud nostrud amet ex est est nisi ad commodo irure irure cupidatat.</p>
      <p>Ea cupidatat cillum elit labore officia mollit.</p>
      <p>Veniam excepteur Lorem incididunt aliqua occaecat sunt ullamco eu quis. Dolore magna aute cillum exercitation exercitation sunt magna. Ullamco enim irure aliqua cupidatat deserunt pariatur deserunt cillum. Enim consectetur pariatur tempor ad consequat id eiusmod excepteur duis ea incididunt. Ea consequat pariatur ea nisi duis Lorem officia et nulla. Cupidatat dolore fugiat voluptate dolore deserunt quis deserunt. Nostrud nostrud amet ex est est nisi ad commodo irure irure cupidatat.</p>
    </div>
  );
}

export default App;
