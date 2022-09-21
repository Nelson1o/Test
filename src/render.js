import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderTree = (store) => {
  root.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>
  );
}