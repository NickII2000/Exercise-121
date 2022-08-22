import React from 'react';

// version 18
// import ReactDOM from 'react-dom/client';
// version version 17
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// пока удален, Ex. 122   import reportWebVitals from './reportWebVitals';

const elem = <h2>Hello World!</h2>

// version 18
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// version 17
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// пока удален, Ex. 122   reportWebVitals();
