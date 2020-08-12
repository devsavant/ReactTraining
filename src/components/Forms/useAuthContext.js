import React, { createContext, useState } from 'react';

export const AuthContext = createContext({email:"", pass:""})

const UseAuthContext = ({children}) => {

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
 
export default UseAuthContext;