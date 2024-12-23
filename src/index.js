import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<h1>...laoding</h1>}>
      <App />
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);


