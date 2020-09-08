import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {AuthContextProvider} from './components/Forms/useAuthContext'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import generateStore from './redux/store'

const store = generateStore()

const WithRedux = () => <Provider store={store} ><App/></Provider>

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
        <AuthContextProvider >
          <WithRedux />
        </AuthContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
