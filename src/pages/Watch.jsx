import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Watch.css';

function Watch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.length > 2) { // Assurez-vous que la requête ne se déclenche que si l'utilisateur a tapé au moins 3 caractères
      setIsLoading(true);
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=3771efb40f404195a09f8fa7b7e00d8a&query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
          setMovies(data.results);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
          setIsLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="watch-page">
      <input
        type="text"
        placeholder="Search movies, series..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="search-bar"
      />
      {isLoading ? (
        <p>Loading...</p> // Affichez un message de chargement
      ) : (
        <div className="movie-grid">
          {movies.map(movie => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Watch;
