import React from 'react';
import { Toast } from './components/Toast';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import './index.scss';
import { AppRouter } from './routers/AppRouter';

const App = () => {

  return (
    <ToastProvider>
      <AuthProvider>
        <AppRouter />

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
