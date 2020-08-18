import React, { Component } from 'react';
import Switch from './Switch';

const ToggleContext = React.createContext()

class Toggle extends Component {
    // static On = ({on, children}) => (on ? children: null)
    // static Off = ({on, children}) => (!on ? children : null)
    // static Button = ({on, toggle, ...props}) => (
    //     <Switch on={on} onClick={toggle} {...props} />
    // ) 

    static On = (props) => <ToggleContext.Consumer>
        {contextValue=>contextValue.on ? props.children : null}
    </ToggleContext.Consumer>

    static Off = (props) => <ToggleContext.Consumer>{contextValue=>contextValue.on ? null : props.children}</ToggleContext.Consumer>
    static Button = (props) => <ToggleContext.Consumer>
        {contextValue => <Switch {...props} on={contextValue.on} onClick={contextValue.toggle} />}
        </ToggleContext.Consumer>

    state = { on: true }

    toggle = () => this.setState(({on})=>({on: !on}), ()=>this.props.onToggle(this.state.on))

    render() {
       return <ToggleContext.Provider value={{
            on:this.state.on,
            toggle: this.toggle
        }}>
            {this.props.children}
        </ToggleContext.Provider>
        // return React.Children.map(this.props.children, childelement => 
        //   React.cloneElement(childelement, {
        //     on: this.state.on,
        //     toggle: this.toggle,
        //   }),
        // )
      }
}
 
export default Toggle;