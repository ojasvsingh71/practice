import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Toggle_BG from './components/toggle_color';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toggle_BG/>
  </React.StrictMode>
);


