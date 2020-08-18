import React, { useState, createContext, useContext } from 'react';
import Switch from './Switch';

const SwitchStatusContext = createContext();

const SwitchHook = (props) => {
    const [on, setOn] = useState(true)
    function toggle() {
        setOn(!on)
    }
    return (
        <SwitchStatusContext.Provider value={{
            on, toggle
        }}>
            {props.children}
        </SwitchStatusContext.Provider>
    )
}

const On = (props) => {
    const { on } = useContext(SwitchStatusContext)
    return on ? props.children : null
    }

const Off = (props) => {
    const { on } = useContext(SwitchStatusContext)
    return !on ? props.children : null
    }

const Button = (props) => {
    const { on, toggle } = useContext(SwitchStatusContext)
    return <Switch {...props} on={on} onClick={toggle} />}


export default SwitchHook;
export { On, Off, Button }