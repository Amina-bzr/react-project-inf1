import React, { useState } from 'react';
import useMovies from '../hooks/useMovies';
import useGenres from '../hooks/useGenres';
import SearchBar from '../components/SearchBar';
import CategorySelector from '../components/CategorySelector';
import NavBar from '../components/NavBar';
import '../style/Watch.css';
import MovieGrid from '../components/MovieGrid';

function Watch() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const { isLoading: isMoviesLoading, isError: isMoviesError, data: movies, error: moviesError } = useMovies();
  const { isLoading: isGenresLoading, isError: isGenresError, data: genres, error: genresError } = useGenres();

  if (isMoviesLoading || isGenresLoading) {
    return <span>Loading...</span>;
  }

  if (isMoviesError || isGenresError) {
    return <span>Error: {moviesError?.message || genresError?.message}</span>;
  }

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

      <MovieGrid filteredMovies={filteredMovies} />
    </div>
  );
}

export default Watch;
