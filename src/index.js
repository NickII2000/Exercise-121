import React from 'react';

// version 18
// import ReactDOM from 'react-dom/client';

// version version 17
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// пока удален, Ex. 122   import reportWebVitals from './reportWebVitals';

// const elem = <h2>Hello World!</h2>;
// const elem = React.createElement('h2', { className: 'greetings' }, 'Hello World!');

const text = 'Hello World!';

const elem = (
  <div>
    <h2 className='text'>Текст: {text}, {3 * 3}, {['1', '2']}</h2> // className вместо class
    <input type='text' />
    <label htmlFor=''></label> // htmlFor вместо for
    <br />
    <br />
    <button tabIndex='0'>Кнопочка</button>
    <br />
    <button />
  </div>
);

// const element = {
//   type: 'h2',
//   props: {
//     className: 'greeting',
//     children: 'Hello World! Привет, Мир!'
//   }
// };

// version 18
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// version 17
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  elem,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// пока удален, Ex. 122   reportWebVitals();
