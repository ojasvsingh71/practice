import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Toggle_BG from './components/toggle_color';
import Hello_world from './components/animate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hello_world />
    <Toggle_BG />
  </React.StrictMode>
);


