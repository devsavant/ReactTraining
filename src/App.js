import React from 'react';
import './App.css';
// import Routes from './Routes';
import SwitchHook, { On, Off, Button } from './components/compoundComponents/SwitchHook';


function App() {

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>
      {/* <Routes /> */}
      <SwitchHook>
        <Button/>
        <On>The button is on</On>
        <Off>The button is off</Off>
      </SwitchHook>
    </div>
  );
}

export default App;
