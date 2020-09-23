import React from 'react';
import './App.css';
// import Routes from './Routes';
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const [chars, status, error] = useSelector(({app:{chars, status, error}})=>[chars, status, error])
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>
      {/* <Routes /> */}
      <input onChange={({target:{value}})=>{
        dispatch({type:"SEARCH", payload:value})
      }} />
      {status === "success" ? <div>
      {chars.map(char=><img width="100" src={char.image} />)}
    </div> : <h2 style={{color:"red"}}>{error}</h2>}
      

      {/* <button onClick={()=>{
        dispatch({type:"FETCH_CHARS"}) // la mas grande ventaja => ya no tengo importar thunks
      }} > */}
        {/* FEtch!
      </button> */}
    </div>
  );
}

export default App;
