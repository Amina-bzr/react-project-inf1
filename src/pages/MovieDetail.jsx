import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMovieDetails from '../hooks/useMovieDetails';
import NavBar from '../components/NavBar';
import { isFavorite, addFavorite, removeFavorite } from '../utils/favorites';
import "../style/MovieDetail.css"

function MovieDetail() {
  const { id } = useParams();
  const [isFav, setIsFav] = useState(false);

  const { isLoading: isMovieLoading, isError: isMovieError, data: movie, error: movieError } = useMovieDetails(id);

  useEffect(() => {
    if (movie) {
      setIsFav(isFavorite(movie.id)); 
    }
  }, [movie]); 

  if (isMovieLoading) {
    return <span>Loading...</span>;
  }

  if (isMovieError) {
    return <span>Error: {movieError?.message}</span>;
  }

  const handleFavoriteClick = () => {
    if (isFav) {
      removeFavorite(movie.id);
      setIsFav(false);
    } else {
      addFavorite(movie);
      setIsFav(true);
    }
  };

  return (
    <div className="movie-page">
      <NavBar title="Detail" route="/watch" />
      <div className="movie-detail">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-text">
          <h1>{movie.title}</h1>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
        <div
          className={`favorite-icon ${isFav ? "favorited" : ""}`}
          onClick={handleFavoriteClick}
        >
          {isFav ? "❤️" : "🤍"}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
