import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';

function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1 className="logo">MovieApp</h1>
      </header>
      <div className="banner">
        <div className="banner-content text-left">
          <h2 className="banner-title">DÉCOUVREZ LE CINÉMA DANS SA PURE EXPRESSION</h2>
          <p className="banner-subtitle">
            Explorez des films incontournables et des classiques à redécouvrir.
          </p>
          <p className="banner-subtitle">
            Vivez des moments intenses, chaque film est une aventure qui vous attend.
          </p>
          <div className="banner-buttons">
            <Link to="/watch" className="watch-btn">Watch Now</Link>
            <Link to="/favorites" className="favorites-btn"> 💖 Mes Favoris</Link> {/* Ajout du bouton Favoris */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
