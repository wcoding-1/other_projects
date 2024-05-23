import React from 'react';
import { createRoot } from 'react-dom/client';

import {store} from './counter/store'
import App from './App';
// import Greet from './jesttest/component/greet.text'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );
const root = createRoot(document.getElementById('root'));
const render = () => {
  root.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />
  )
}
store.subscribe(render);
render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

