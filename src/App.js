import React from 'react';
import { Header } from './components/Header';
import { Toast } from './components/Toast';
import { ToastProvider } from './context/ToastContext';
import './index.scss';

const App = () => {

  return (
    <ToastProvider>

      <Header />

      <Toast
        position='bottom-right'
        autoDelete={true}
        dismissTime={3}
      />

    </ToastProvider>
  );
}

export default App;
