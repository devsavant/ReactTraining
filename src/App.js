import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {compose} from 'redux'
// import withConsole from './components/written/withConsole'
// import withMortys from './components/written/withMortys'
import ListView from './components/List/ListView'
import withMortys from './components/List/withMortys'
import SimpleForm from './components/Forms/SimpleForm';
import HookForm from './components/Forms/HookForm';
import MatchingProps from './components/Forms/MatchingProps';
import Routes from './Routes';
import {Link, NavLink, Route} from 'react-router-dom'

function App() {

  // const ListViewWithMortys = withMortys(ListView) // un componente nuevo
  const [name] = useState("BlisS")
  return (
    <div >
      <nav>
        <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
        <NavLink activeStyle={
          {
            backgroundColor:"grey",
            color:"orange"
          }
        } to="/login" >
          Login
        </NavLink>
      </nav>
      <Routes />
    </div>
  );
}

export default App;






  // const SortOfMixin = compose(
  //   withConsole,
  //   withMortys,
  //   withLoquesea,
  //   withLoquesea2,
  //   withLoquesea3
  // )(ListView)
