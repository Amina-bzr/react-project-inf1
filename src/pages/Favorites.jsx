import React, { useState, useEffect } from 'react';
import { getFavorites, removeFavorite } from '../utils/favorites';
import '../style/Favorites.css';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemoveFavorite = (movieId) => {
    removeFavorite(movieId);
    setFavorites(getFavorites());
  };

  return (
    <div className="favorites">
      <header className="favorites-header">
        
        <h1 style={{ color: 'red', fontSize: '2.5rem', textAlign: 'center', marginBottom: '20px' }}>
          Mes Favoris
        </h1>
      </header>

      <div className="favorites-grid">
        {favorites.length === 0 ? (
          <p>Aucun film ajouté aux favoris pour le moment.</p>
        ) : (
          favorites.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveFavorite(movie.id)}
                >
                  Retirer des favoris
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;
