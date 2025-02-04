// CategorySelector.jsx
import React from 'react';

function CategorySelector({ categories, selectedCategory, setSelectedCategory }) {
  return (
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="category-select"
      >
        <option value="">All Categories</option>
        {categories.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
  );
}

export default CategorySelector;
