import React, {useState} from 'react';
import './App.css';
import Button from './components/written/Button';
// import TestRenderer from 'react-test-renderer'

export class Test extends React.Component{
  state = {
    name: "Blissito",
    email: ''
  }

  sendForm = (form) => {
    return "yes!"
  }

  render(){
    return (<>
      <span id="test" >Hello {this.state.name}</span>
      <p>{this.state.email}</p>
      <input onChange={e=>this.setState({email: e.target.value})} />
    </>)
  }
}

function App() {
  const [counter, setCounter] = useState(0)

  // function sendForm(){
  //   return true
  // }

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>
      <img src="" alt="logo" />
      {counter > 0 && <h2 >{counter}</h2>}
      <Button onClick={()=>{
        setCounter(counter+1)
      }} >
        Puchame!
      </Button>
      <p id="pepe" className="bliss">Shallow</p>
      <Test />
    </div>
  );
}

// console.log(TestRenderer.create(<App/>).toJSON())

export default App;
