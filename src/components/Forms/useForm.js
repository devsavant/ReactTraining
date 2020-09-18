import React, {useState} from 'react';

function useForm(initial={}){
    const [state, setState] = useState(initial)
    consr [errors, setErrors]

    function validateForm(){
        let errs = {}
        if(!state.email) {
            errs.email = "Campo obligatorio"
        } else if(state.email.length>8 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(state.email)){
            errs.email = "Esto no tiene forma de correo"
        }
        if(state.password.length<4){
            errs.password = "Este campo es obligatorio"
        }
        setErrors(errs)
    }

    function handleChange(event){
        setState({...state, [event.target.name]:event.target.value})
    }

    function handleCheckbox(event){
        setState({...state, [event.target.name]:event.target.checked})
    }

    return {state, handleChange, handleCheckbox}

}

export default useForm