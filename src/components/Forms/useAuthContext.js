import React, { useState, createContext } from 'react';

const AuthContext = createContext({})

const AuthContextProvider = ({children}) => {

  const [state, setState] = useState[{ email :'', pass: '' }]

  function handleChange(name, value) {
    setState({...state, [name]: value })
  }

  return(
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>)
}

export default AuthContextProvider;