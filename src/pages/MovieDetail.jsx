import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addFavorite, removeFavorite, isFavorite } from "../utils/favorites";
import "../style/MovieDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isFav, setIsFav] = useState(false); // État pour savoir si le film est un favori

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3771efb40f404195a09f8fa7b7e00d8a`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setIsFav(isFavorite(data.id)); // Vérifie si le film est déjà un favori
      })
      .catch((error) => console.error("Error fetching movie details: ", error));
  }, [id]);

  const handleFavoriteClick = () => {
    if (isFav) {
      removeFavorite(movie.id); // Retirer des favoris
      setIsFav(false);
    } else {
      addFavorite(movie); // Ajouter aux favoris
      setIsFav(true);
    }
  };

  if (!movie) return <div>Loading...</div>;

  return (
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
        {isFav ? "❤️" : "🤍"} {/* Cœur plein si favori, cœur vide sinon */}
      </div>
    </div>
  );
}

export default MovieDetail;
