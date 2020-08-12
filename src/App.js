import React from 'react';
import logo from './logo.svg';
import './App.css';
import {compose} from 'redux'
// import withConsole from './components/written/withConsole'
// import withMortys from './components/written/withMortys'
import ListView from './components/List/ListView'
import withMortys from './components/List/withMortys'
import SimpleForm from './components/Forms/SimpleForm';
import HookForm from './components/Forms/HookForm';

function App() {

  // const ListViewWithMortys = withMortys(ListView) // un componente nuevo
  
  return (
    <div >
      {/* <ListViewWithMortys /> */}
      {/* <SimpleForm /> */}
      <HookForm/>
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
