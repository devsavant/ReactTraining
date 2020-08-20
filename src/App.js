import React from 'react';
import './App.css';
// import Routes from './Routes';
import SwitchHook, { On, Off, Button } from './components/compoundComponents/SwitchHook';
import Form1 from './components/Forms/Form1'
function App() {

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>
      {/* <Routes /> */}
      {/* <SwitchHook>
        <Button/>
        <On>The button is on</On>
        <Off>The button is off</Off>
      </SwitchHook> */}
      <Form1 />
    </div>
  );
}

export default App;