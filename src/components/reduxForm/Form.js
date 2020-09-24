import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'


const Form = ({onSubmit}) => {
    const dispatch = useDispatch()
    const {firstName, lastName, email} = useSelector(state=>state.app.contactForm);
    const [data, setData] =  useState({
      firstName: '',
      lastName: '',
      email: ''
    });

  useEffect(() => {
    dispatch({type:"POPULATE_FORM", payload:data})
  }, [data,dispatch]);

  
    const handleChange = (event) => {
      setData({...data, [event.target.name]:event.target.value});
    };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({firstName, lastName, email})
  };
  
  return (
    <>
     
        <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="firstName">First Name</label>
          <input value={firstName || ''} onChange={handleChange} name="firstName" type="text" />
        </p>
        <p>
          <label htmlFor="lastName">Last Name</label>
          <input value={lastName || ''} onChange={handleChange} name="lastName" type="text" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input value={email || ''} onChange={handleChange} name="email" type="email" />
        </p>
        <input value="Enviar" type="submit"/>
      </form>
      </>
     );
}

export default Form
