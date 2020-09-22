import React from 'react';
import './App.css';
// import Routes from './Routes';
import {useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch()
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>
      {/* <Routes /> */}
      <button onClick={()=>{
        dispatch({type:"FETCH_CHARS"}) // la mas grande ventaja => ya no tengo importar thunks
      }} >
        FEtch!
      </button>
    </div>
  );
}

export default App;
