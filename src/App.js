import React from 'react';
// import { Header } from './components/Header';
import { Login } from './components/Login';
import { Toast } from './components/Toast';
import { ToastProvider } from './context/ToastContext';
import './index.scss';

const App = () => {

  return (
    <ToastProvider>

      <Login />

      <Toast
        position='bottom-right'
        autoDelete={true}
        dismissTime={3}
      />

    </ToastProvider>
  );
}

export default App;
