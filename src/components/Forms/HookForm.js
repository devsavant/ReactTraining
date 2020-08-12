import React, { useState, useEffect, useReducer, useContext } from 'react';
import {AuthContext} from './useAuthContext'

const HookForm = (props) => {

    let {state, handleChange} = useContext(AuthContext)
 
    // let [state, setState] = useState({email:"", pass:""})
    // let [state, setState] = useReducer(reducer, {email:"", pass:""})

    // function reducer(state, newState){
    //     return {...state, ...newState}
    // }

    // useEffect(()=>{
    //     console.log(state)
    // }, [state])

    // let [email, setEmail] = useState("")
    // let [pass, setPass] = useState("")

    function onChange(event){
        let {name, value} = event.target
        handleChange(name,value)
        // setState({...state, [name]:value}) // agregar responsabilidades
        // setEmail(value)
    }

    return ( 
        <div>
                <h2>
                    {JSON.stringify(state)}
                </h2>
                <input name="email" onChange={onChange} placeholder="email" />
                <input name="pass"  onChange={onChange}  placeholder="pass" />
            </div>
     );
}
 
export default HookForm;