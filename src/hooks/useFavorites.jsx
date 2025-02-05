import { useState, useEffect } from 'react';
import { getFavorites, removeFavorite } from '../utils/favorites';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemoveFavorite = (movieId) => {
    removeFavorite(movieId);
    setFavorites(getFavorites());
  };

  return {
    favorites,
    handleRemoveFavorite,
  };
};

export default useFavorites;
