import React, { useState, createContext, useContext } from 'react';
import Switch from './Switch';

const SwitchStatusContext = createContext({ on: true });

const SwitchHook = (props) => {
    const [state, setState] = useState({ on: true })
    function toggle() {
        setState({ ...state, on: !state.on });
    }
    return (
        <SwitchStatusContext.Provider value={{
            state, toggle
        }}>
            {props.children}
        </SwitchStatusContext.Provider>
    )
}

const On = (props) => {
    const { state } = useContext(SwitchStatusContext)
    console.log(state)
    return state.on ? props.children : null
    }

const Off = (props) => {
    const { state } = useContext(SwitchStatusContext)
    return !state.on ? props.children : null
    }

const Button = (props) => {
    const { state, toggle } = useContext(SwitchStatusContext)
    return <Switch {...props} on={state.on} onClick={toggle} />}


export default SwitchHook;
export { On, Off, Button }