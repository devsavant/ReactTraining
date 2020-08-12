import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import useAuthContext from './components/Forms/useAuthContext'

const AppWithContext = () => {
  const Provider = useAuthContext()
  return (<Provider><App/></Provider>)

}

ReactDOM.render(
  <React.StrictMode>
      <AppWithContext />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
