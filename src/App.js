import React, {useState} from 'react';
import './App.css';
import Button from './components/written/Button';
import TestRenderer from 'react-test-renderer'

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>

      {counter > 0 && <h2>{counter}</h2>}
      <Button onClick={()=>{
        setCounter(counter+1)
      }} >
        Puchame!
      </Button>
      <Button>Cancel</Button>
    </div>
  );
}

// console.log(TestRenderer.create(<App/>).toJSON())

export default App;
