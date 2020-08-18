import React from 'react';
import './App.css';
// import Routes from './Routes';
import HomeContainer from './components/common/HomeContainer';


function App() {

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>
      {/* <Routes /> */}
      <HomeContainer >
        <div>
          <HomeContainer.Button/>
        </div>
        <HomeContainer.On>The button is on</HomeContainer.On>
        <HomeContainer.Off>The button is off</HomeContainer.Off>
      </HomeContainer>
    </div>
  );
}

export default App;
