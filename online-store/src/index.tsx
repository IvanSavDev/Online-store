import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App/App';
import { Context } from './context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
  <Context>
    <App />
  </Context>
);
