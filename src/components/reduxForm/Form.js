import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

// const data = {
//     // used to populate "account" reducer when "Load" is clicked
//     firstName: 'Jane',
//     lastName: 'Doe',
//     email: 'mijo@mijo.com'
//   }

const Form = ({onSubmit}) => {
  const contactForm = useSelector(state=>state.app.contactForm)
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch({type:"POPULATE_FORM"})
    }, [dispatch])

    const handleChange = (event) => {
      const data = {...contactForm, [event.target.name]: event.target.value}
      dispatch({type: "CHANGE_FORM", payload: data})
    }
    return (
    <>
            {/* <button
            onClick={load}
            >
                Get data
            </button> */}
            <br/>
        <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="firstName">First Name</label>
          <input value={contactForm.firstName} onChange={handleChange} name="firstName" type="text" />
        </p>
        <p>
          <label htmlFor="lastName">Last Name</label>
          <input value={contactForm.lastName} onChange={handleChange} name="lastName" type="text" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input value={contactForm.email} onChange={handleChange} name="email" type="email" />
        </p>
        <input value="Enviar" type="submit"/>
      </form>
      </>
     );
}

export default Form