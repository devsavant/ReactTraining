import React, { useState } from 'react';
import useForm from './useForm' // [state, handleChange]

const Form1 = (props    ) => {

    const [errors, setErrors] = useState({})

    const {state:form, handleCheckbox, handleChange} = useForm({
        email:"blis", 
        password:"123", 
        terms:true
    })

    const onChange = (ev) => {
        handleChange(ev)
        validateForm()
    }

    return ( 
        <form onSubmit={e=>e.preventDefault()}>
            {/* <h2>{JSON.stringify(form)}</h2> */}
            <input value={form.email} onChange={onChange} placeholder="escribe tu mail" name="email"/>
            <p style={{color:"red"}}>{errors.email}</p>
            <br/>
            <input value={form.password} onChange={onChange} placeholder="escribe tu contraseña" name="password" type="password" />
            <p style={{color:"red"}}>{errors.password}</p>
            <br/>
            <input checked={form.terms} name="terms" onChange={handleCheckbox}  type="checkbox" /> Terms and conditions
            <br/>
            <input type="submit" />
        </form>
     );
}
 
export default Form1;

// 1.- Podriamos crear un HOC que tenga ya los metodos correspondientes?