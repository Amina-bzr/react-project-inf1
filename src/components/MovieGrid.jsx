import React from 'react';
import MovieCard from './MovieCard'; 
import "../style/MovieGrid.css"

const MovieGrid = ({ filteredMovies }) => {
  return (
    <div className="movie-grid">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
