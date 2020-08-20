import React from 'react';
import './App.css';
// import Routes from './Routes';
import HomeContainer from './components/common/HomeContainer';
import List from './components/common/List';
import Form1 from './components/Forms/Form1';


function App() {

  const onToggle = (...rest) => console.log(...rest)

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>

      <Form1/>
    </div>
  );
}

export default App;
