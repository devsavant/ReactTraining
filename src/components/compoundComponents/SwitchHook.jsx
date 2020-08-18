import React, { useState, createContext, useContext } from 'react';
import Switch from './Switch';

const SwitchStatusContext = createContext({ on: true });

const SwitchHook = (props) => {
    console.log("aqui si")
    console.log(props.chilren)
    const [state, setState] = useState({ on: true })
    function toggle() {
        setState({ ...state, on: !state.on });
    }
    return (
        <SwitchStatusContext.Provider value={{
            state, toggle
        }}>
            {props.chilren}
        </SwitchStatusContext.Provider>
    )
}

const On = (props) => {
    console.log("llego a on", props)
    const { state } = useContext(SwitchStatusContext)
    return state.on ? props.chilren : null
    }

const Off = (props) => {
    const { state } = useContext(SwitchStatusContext)
    return state.on ? props.chilren : null
    }

const Button = (props) => {
    const { state, toggle } = useContext(SwitchStatusContext)
    return <Switch {...props} on={state.on} onClick={toggle} />}


export default SwitchHook;
export { On, Off, Button }