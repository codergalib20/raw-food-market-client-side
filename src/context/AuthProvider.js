import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const allContexts = useFirebase();
  console.log(allContexts)
  return (
    <AuthContext.Provider value={allContexts}>
          {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;