import React from 'react';

const FavoriteMovieCard = ({ movie, onRemove }) => {
  return (
    <div className="FavMovie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="FavMovie-poster"
      />
      <div className="FavMovie-info">
        <h3 className="FavMovie-title">{movie.title}</h3>
        <button className="remove-btn" onClick={() => onRemove(movie.id)}>
          Retirer des favoris
        </button>
      </div>
    </div>
  );
};

export default FavoriteMovieCard;
