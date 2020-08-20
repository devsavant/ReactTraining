import React, {useState} from 'react';

function useForm(initial={}){
    const [state, setState] = useState(initial)

    function handleChange(event){
        setState({...state, [event.target.name]:event.target.value})
    }

    function handleCheckbox(event){
        setState({...state, [event.target.name]:event.target.checked})
    }

    return {state, handleChange, handleCheckbox}

}

export default useForm