import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

import "./global.css";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<MovieDetails />} />
          <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  </div>
);