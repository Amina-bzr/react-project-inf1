import React from 'react';
import { Link } from 'react-router-dom';
import '../style/MovieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </Link>
  );
};

export default MovieCard;
