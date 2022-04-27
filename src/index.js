import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom/client';
import './index.css';
// eslint-disable-next-line

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import * as mdb from 'mdb-react-ui-kit';
import App from './components/App';
import rootReducer from './reducers/index';
import reportWebVitals from './reportWebVitals';

// npm install --save mdbreact

const store = createStore(rootReducer);

store.subscribe(() =>
  console.log(store.getState())
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
