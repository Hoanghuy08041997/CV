import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

const rootElement = (
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

const rootContainer = createRoot(root);
rootContainer.render(rootElement);
