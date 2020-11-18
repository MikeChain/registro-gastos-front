import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: localStorage.getItem('token') || '',
    logged: new Date() < new Date(localStorage.getItem('expires'))
  });

  return (
    <AuthContext.Provider value={{
      user, setUser
    }}>
      <>
        {children}
      </>
    </AuthContext.Provider>
  )
}