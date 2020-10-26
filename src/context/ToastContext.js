import React, { createContext, useState } from 'react';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {

  const [list, setList] = useState([]);

  return (
    <ToastContext.Provider value={{
      list, setList
    }}>
      <>
        {children}
      </>
    </ToastContext.Provider>
  )
}
