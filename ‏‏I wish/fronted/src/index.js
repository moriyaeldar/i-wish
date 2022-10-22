import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import {RootCmp} from './root-cmp';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
        <Router>
          <RootCmp />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
