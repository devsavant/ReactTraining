import React, { useState, useEffect, useReducer, useContext } from 'react';

const HookForm = (props) => {

    // const [state, setState] = useState({email: "", pass: ""});
    // let [state, setState] = useReducer(reducer, {email: "", pass: ""})

    // function reducer(state, newState) {
    //     return {...state, ...newState}
    // }

    // useEffect(() => {
    //     console.log(state)
    // }, [state])

    function onChange(event) {
        let { name, value } = event.target
        // setState({ ...state, [name]: value })
        setState({[name]: value})
    }
    return (
        <div>
          <h2>
              {JSON.stringify(state)}
          </h2>
          <input
              onChange={onChange}
              type="text"
              placeholder="email"
              name="email"
          />
          <input
              onChange={onChange}
              type="text"
              placeholder="pass"
              name="pass" />
        </div>
      )
}

export default HookForm;