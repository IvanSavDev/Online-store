import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App/App';
import { Context } from './context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

console.log(
  'Layout: +10\nThe product card contains its image, name, quantity of this product in stock, year of entry into the market, color, manufacturer, etc., whether the product is in the basket +10\nAdding items to cart +20\nSorting +20\nFilters in the specified range from and to +30\nFilters by value +30\nYou can filter products by several filters of different types +20\nReset filters +20\nSave settings to local storage +30\nSearch +30'
);

root.render(
  <Context>
    <App />
  </Context>
);
