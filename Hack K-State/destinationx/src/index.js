import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home';
import Navigation from './components/Navigation.js';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/play" element={<App />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

