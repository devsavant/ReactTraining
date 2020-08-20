import  {useState} from 'react';

function useForm(initial={}){
    const [state, setState] = useState(initial);
    const [errors, setErrors] = useState({});

    function handleChange(event){
        setState({...state, [event.target.name]:event.target.value});
        validateForm()
    }

    function handleCheckbox(event){
        setState({...state, [event.target.name]:event.target.checked})
    }
    
    function validateForm(){
        let errs = {}
        if(!state.email) {
            errs.email = "Campo obligatoria"
        } else if(state.email.length>8 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(state.email)){
            errs.email = "Esto no tiene forma de correo"
        }
        if(!state.password){
            errs.password = "Este campo es obligatorio"
        }
        setErrors(errs)
    }


    return {state, handleChange, handleCheckbox, errors}

}

export default useForm
