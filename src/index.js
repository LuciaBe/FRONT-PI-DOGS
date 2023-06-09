import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'; //ahora la app tiene la capacidad dde definir rutas
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';

//axios.defaults.baseURL = 'http://localhost:3001'   //! BACK LOCAL
axios.defaults.baseURL = 'https://back-pi-dogs-production.up.railway.app/' //!BACK DOMINIO DEPLOY
 // CREO base url a usar en cada axios llamado en actions en este caso

ReactDOM.render(
<Provider store={store}>
 <BrowserRouter>
     <App/>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {BrowserRouter} from 'react-router-dom'; //ahora la app tiene la capacidad dde definir rutas


const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <App/>
  </BrowserRouter>
)*/