import React, { useState, useEffect } from "react";
import { getFavorites, removeFavorite } from "../utils/favorites";
import { Link } from "react-router-dom";
import "../style/Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (movieId) => {
    removeFavorite(movieId);
    setFavorites(getFavorites()); // Mettre à jour la liste après suppression
  };

  return (
    <div className="favorites">
      <h1>🎬 Mes Films Favoris</h1>
      {favorites.length === 0 ? (
        <p>Aucun film ajouté aux favoris.</p>
      ) : (
        <div className="favorite-list">
          {favorites.map((movie) => (
            <div key={movie.id} className="favorite-item">
              <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
              </Link>
              <h3>{movie.title}</h3>
              <button onClick={() => handleRemove(movie.id)}>❌ Retirer</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
