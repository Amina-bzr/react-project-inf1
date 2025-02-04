import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Watch from './pages/Watch';
import MovieDetail from './pages/MovieDetail';
import Favorites from './pages/Favorites'; // Importation de la page des favoris

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />} /> {/* Ajout de la route Favoris */}
      </Routes>
    </Router>
  );
}

export default App;
