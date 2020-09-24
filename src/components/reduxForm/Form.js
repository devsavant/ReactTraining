import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const data = {
    // used to populate "account" reducer when "Load" is clicked
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'mijo@mijo.com'
  }

const Form = ({onSubmit}) => {
    const dispatch = useDispatch()
    const {firstName, lastName, email} = useSelector(state=>state.app.contactForm)
    const load = () => {
        dispatch({type:"POPULATE_FORM", payload:data})
    }
    const handleChange = (event) => {
      dispatch({type: "CHANGE_FORM", payload: {key: event.target.name, value: event.target.value}})
    }
    return ( 
    <>
            <button 
            onClick={load}
            >
                Get data
            </button>
            <br/>
        <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="firstName">First Name</label>
          <input value={firstName} onChange={handleChange} name="firstName" type="text" />
        </p>
        <p>
          <label htmlFor="lastName">Last Name</label>
          <input value={lastName} onChange={handleChange} name="lastName" type="text" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={handleChange} name="email" type="email" />
        </p> 
        <input value="Enviar" onChange={handleChange} type="submit"/>
      </form>
      </>
     );
}
 
export default Form