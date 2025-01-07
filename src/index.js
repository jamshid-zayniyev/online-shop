import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<h1>...loading</h1>}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);


