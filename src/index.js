import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

const rootElement = (
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

const rootContainer = createRoot(root);
rootContainer.render(rootElement);
