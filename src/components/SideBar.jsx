// SideBar.jsx
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchGenres = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzcxZWZiNDBmNDA0MTk1YTA5ZjhmYTdiN2UwMGQ4YSIsIm5iZiI6MTczNDQ3MzY3OS43MjQsInN1YiI6IjY3NjFmN2NmMGI2ZWFjNGQ4ZTA4NGU3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XFH28lABClWe4F9a43tjvgiJ251ayFnN16n0nzU8WdI'
      }
    };
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en',options);
    const data = await response.json();
    return data.genres;
  };

function SideBar({ selectedCategories, setSelectedCategories }) {
  const { data: genres, isLoading, isError } = useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
  });

  if (isLoading) return <div>Loading genres...</div>;
  if (isError) return <div>Error fetching genres</div>;


  const handleCategoryChange = (event) => {
    const selected = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedCategories(selected);
  };

  return (
    <div className="sidebar">
      <h3>Select Categories</h3>
      <select
        multiple
        value={selectedCategories}
        onChange={handleCategoryChange}
        className="category-select"
      >
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SideBar;
