import React from 'react';
import './App.css';
import Form from './components/reduxForm/Form';

function App() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>
      <Form onSubmit={data => {
        console.log(data)
       
      }}/>
    </div>
  );
}

export default App;
