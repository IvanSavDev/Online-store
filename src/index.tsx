import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App/App';
import ShopProvider from './context/ShopContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ShopProvider>
      <React.Profiler id="app" onRender={() => {}}>
        <App />
      </React.Profiler>
    </ShopProvider>
  </React.StrictMode>,
);
