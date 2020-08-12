import React, { createContext, useState } from 'react';

const AuthContext = createContext({email:"", pass:""})

const AuthContextProvider = ({children}) => {
    const [state, setState] = useState({email:"", pass:""})

    function handleChange(name,value){
        setState({...state, [name]:value})
    }

   return (<AuthContext.Provider value={{
       state,
       handleChange
   }}>
            {children}
        </AuthContext.Provider>)
}
 
export {AuthContext, AuthContextProvider};