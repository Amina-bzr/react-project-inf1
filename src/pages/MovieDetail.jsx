import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3771efb40f404195a09f8fa7b7e00d8a`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details: ", error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
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
    </div>
  );
}

export default MovieDetail;
