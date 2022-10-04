import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import './index.css';
import { api } from './app/services/baseApi';

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

