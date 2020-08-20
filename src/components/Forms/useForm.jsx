 import React, { useState } from 'react';

const useForm = (initial) => {

    const [state, setState] = useState(initial);
    const [errors, setErrors] = useState({});

    function handleChange(event) {
        setState({...state, [event.target.name]: event.target.value })
        validateForm(event.target.name)
    }

    function handleCheckbox(event) {
        setState({...state, [event.target.name]: event.target.checked })
    }

    function validateForm(key) {
        if (!state[key] || state[key].length < 4) {
            setErrors({...errors, [key]: 'El campo es obligatorio'})
        }
        if (key === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9].-\.[A-Z]{2,}$/i.test(state[key])) {
            setErrors({...errors, email: 'El email no es email'})
        }
    }

    return {
            state,
            errors,
            handleChange,
            handleCheckbox
     }
 }

export default useForm