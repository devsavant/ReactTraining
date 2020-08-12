import React, { createContext, useState } from 'react';

export const AuthContext = createContext({email:"", pass:""})

const useAuthContext = () => {

    const [state, setState] = useState({email:"", pass:""})

    function handleChange(name,value){
        setState({...state, [name]:value})
    }

   return ({children})=>(<AuthContext.Provider value={{
       state,
       handleChange
   }}>
            {children}
        </AuthContext.Provider>)
}
 
export default useAuthContext;