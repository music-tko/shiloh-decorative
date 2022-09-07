import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Gallery from './components/Gallery';
import Header from './layout/Header';
import Footer from './layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Header /> 
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/gallery" element={<Gallery />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

