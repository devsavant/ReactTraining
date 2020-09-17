import React, { useState } from 'react';
import { connect } from 'react-redux';
import { transformTokenAction } from '../redux/userDuck'

const HomeTwo = ({ token, displayName, transformTokenAction }) => {
  const [state, setState] = useState('');
  
    const onClick = () => {
        transformTokenAction(state)
    }
  
  function onChange(event){
    setState(event.target.value)
  }

    return (
        <div>
            <h2>Home with redux, welcome {displayName}</h2>
            <h3>{token}</h3>
            <input value={state.token} onChange={onChange} placeholder="escribe tu token" name="token"/>
            <button onClick={onClick}>
                Transform Token
            </button>
        </div>
     );
}

function mapStateToProps({user:{displayName, token}}) {
    return {
        displayName,
        token
    }
}

// agregar un input para que escribamos el nuevo token y usar el valor para reescribir el token

export default connect(mapStateToProps, {transformTokenAction})(HomeTwo);
