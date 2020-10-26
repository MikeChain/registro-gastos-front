import React, { useState } from 'react';
import { Modal } from './components/Modal';
import { RegistroForm } from './components/RegistroForm';
import { Toast } from './components/Toast';
import './index.scss';

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [list, setList] = useState([]);

  const close = () => {
    setIsModalOpen(false);
  }

  const showToast = (type, title, description) => {
    const toastProperties = {
      type,
      title,
      description,
      id: new Date().getTime()
    };

    setList([...list, toastProperties]);
  }

  return (
    <div className="App">

      <button onClick={() => showToast('success')}>
        Llamar toast
      </button>


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
        toastList={list}
        position='bottom-right'
        autoDelete={false}
        dismissTime={3}
      />

    </div>
  );
}

export default App;
