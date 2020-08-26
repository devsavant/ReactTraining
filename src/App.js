import React from 'react';
import './App.css';
import Cicle from './components/life/Cicle';
import FunctionCicle from './components/life/FunctionCicle';
import Routes from './Routes';
import { NavLink } from 'react-router-dom';


function App() {

  const onToggle = (...rest) => console.log(...rest)

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>
      {/* <NavLink to="/" >
        home
      </NavLink>
      {" | "}
      <NavLink to="/classtimer" >
        ClassTimer
      </NavLink>
      {" | "}
      <NavLink to="/timer" >
        timer
      </NavLink>
      <Cicle /> */}
      <Routes />
    </div>
  );
}

export default App;
