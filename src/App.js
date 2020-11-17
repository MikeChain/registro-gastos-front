import React from 'react';
// import { Header } from './components/Header';
import { Login } from './components/Login';
import { Toast } from './components/Toast';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import './index.scss';

const App = () => {

  return (
    <ToastProvider>
      <AuthProvider>
        <Login />

        <Toast
          position='bottom-right'
          autoDelete={true}
          dismissTime={3}
        />
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
