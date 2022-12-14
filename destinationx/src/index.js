import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home';
import Learn from './Learn';
import Space from './Space';
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
        <Route exact path="/learn" element={<Learn />} />
        <Route exact path="/learn" element={<Learn />} />
        <Route exact path="/Space" element={<Space />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

