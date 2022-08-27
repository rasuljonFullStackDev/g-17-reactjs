import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css';
import  App  from './App';
import reportWebVitals from './reportWebVitals';
import { DataContextProvider } from './context/api/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      // <BrowserRouter>
      <DataContextProvider>
            <App />
      </DataContextProvider>
      // </BrowserRouter>
);
reportWebVitals();
