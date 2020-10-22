import React, {lazy, Suspense} from 'react';
import './App.css';
import Home from './components/suspense/Home'


function App() {

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>
        <h2>Mi Pan zuzu</h2>
            <Home />
    </div>
  );
}

export default App;
