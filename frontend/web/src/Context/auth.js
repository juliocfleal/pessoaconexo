import React, { createContext } from 'react';


const AuthContext = createContext({});

export const AuthProvider: login = ({ children }) => {
  return (
    <AuthContext.Provider value={{ signed: true }}>
      {children}
    </AuthContext.Provider>
  );
 };

export default AuthContext;