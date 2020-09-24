import React from 'react';
import './App.css';
import Form from './components/reduxForm/Form';
import {useSelector} from 'react-redux'

function App() {
  const contactForm = useSelector(({app:{contactForm}})=>contactForm)
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>
      <Form onSubmit={data=>{
        data.preventDefault()
        console.table(contactForm)
      }}/>
    </div>
  );
}

export default App;
