import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
import "../style/MovieDetail.css";
=======
import { addFavorite, removeFavorite, isFavorite } from "../utils/favorites";
import "./MovieDetail.css";
>>>>>>> 5e5da76178fedd84aa2f7f53f0b401cef82d9b9a

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
<<<<<<< HEAD

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3771efb40f404195a09f8fa7b7e00d8a`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details: ", error));
  }, [id]);

=======
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3771efb40f404195a09f8fa7b7e00d8a`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setFavorite(isFavorite(data.id));
      })
      .catch((error) => console.error("Error fetching movie details: ", error));
  }, [id]);

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
    setFavorite(!favorite);
  };

>>>>>>> 5e5da76178fedd84aa2f7f53f0b401cef82d9b9a
  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
<<<<<<< HEAD
      <h1>{movie.title || "Title Not Available"}</h1>
      <p>{movie.overview || "Overview not available."}</p>
      <ul>
        <li>Release Date: {movie.release_date || "N/A"}</li>
        <li>Rating: {movie.vote_average || "N/A"}</li>
      </ul>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || "Movie Poster"}
      />
=======
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-text">
        <h1>{movie.title}</h1>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
        <button onClick={toggleFavorite} className={favorite ? "btn-favorite active" : "btn-favorite"}>
          {favorite ? "Retirer des Favoris ❤️" : "Ajouter aux Favoris 🤍"}
        </button>
      </div>
>>>>>>> 5e5da76178fedd84aa2f7f53f0b401cef82d9b9a
    </div>
  );
}

export default MovieDetail;
