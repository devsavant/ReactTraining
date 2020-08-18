import React, { Component } from 'react';
// import HomeDisplay from './HomeDisplay'
import Switch from '../compoundComponents/Switch'

const ToggleContext = React.createContext()

class HomeContainer extends Component { // advanced composition -- Hiper reusable

    static On = ({children}) => <ToggleContext.Consumer>
        {contextValue=>(contextValue.on ? children : null)}
    </ToggleContext.Consumer>

    static Off = ({children}) => <ToggleContext.Consumer>
        {contextValue=>(contextValue.on ? null : children)}
    </ToggleContext.Consumer>

    static Button = (props) => (<ToggleContext.Consumer>
        {contextValue=><Switch {...props} on={contextValue.on} onClick={contextValue.toggle} />}
    </ToggleContext.Consumer>)

    state = { on: true }

    toggle = () => {
        this.setState(currentState=>({on:!currentState.on}))
    }

    render() {
        console.log(this.props.children)
        return <ToggleContext.Provider
         value={{on:this.state.on, toggle:this.toggle}}>
            {this.props.children}
        </ToggleContext.Provider>
    }
}

export default HomeContainer;