import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="logo" />
        <div className="nav-links">
          <input type="email" placeholder="Email Address" className="email-input" />
          <button className="sign-in-btn">Se Connecter</button>
          <Link to="/watch" className="watch-btn">Watch</Link>
        </div>
      </header>
      <div className="banner">
        <h1>Nom de la Série/Film</h1>
        <p>Description brève...</p>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">More Info</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
