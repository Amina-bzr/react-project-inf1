<<<<<<< HEAD
// Watch.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import useGenres from '../hooks/useGenres';
import SearchBar from '../components/SearchBar';
import CategorySelector from '../components/CategorySelector';
import NavBar from '../components/NavBar';
import '../style/Watch.css';

function Watch() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetch movies and genres using custom hooks
  const { isLoading: isMoviesLoading, isError: isMoviesError, data: movies, error: moviesError } = useMovies();
  const { isLoading: isGenresLoading, isError: isGenresError, data: genres, error: genresError } = useGenres();

  if (isMoviesLoading || isGenresLoading) {
    return <span>Loading...</span>;
  }

  if (isMoviesError || isGenresError) {
    return <span>Error: {moviesError?.message || genresError?.message}</span>;
  }

  // Filter movies based on search query and selected category
  const filteredMovies = movies.filter((movie) => {
    const matchesQuery = movie.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory ? movie.genre_ids.includes(parseInt(selectedCategory)) : true;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="watch-page">
      <NavBar title="Movies" route="/" ></NavBar>
      
      
      <div className="filter-container">
        <SearchBar query={query} setQuery={setQuery} />
        <CategorySelector
          categories={genres}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </Link>
        ))}
      </div>
=======
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
>>>>>>> 5e5da76178fedd84aa2f7f53f0b401cef82d9b9a
    </div>
  );
}

export default Watch;
<<<<<<< HEAD

=======
>>>>>>> 5e5da76178fedd84aa2f7f53f0b401cef82d9b9a
