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
    </div>
  );
}

export default Watch;

