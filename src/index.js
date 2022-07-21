import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import { expenseStore } from './Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Provider store={expenseStore} >
      <App />
    </Provider>
  </React.Fragment>
);
