// SearchBar.jsx
import React from 'react';

function SearchBar({ query, setQuery }) {
  return (
      <input
        type="text"
        placeholder="Search movies, series..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="search-bar"
      />
  );
}

export default SearchBar;
