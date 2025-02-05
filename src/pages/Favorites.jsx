import React from 'react';
import useFavorites from '../hooks/useFavorites'; 
import FavoriteMovieCard from '../components/FavoriteMovieCard'; 
import '../style/Favorites.css';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import RemoveFavoriteButton from '../components/RemoveFavoriteButton';
import NavBar from '../components/NavBar';
function Favorites() {
  const { favorites, handleRemoveFavorite } = useFavorites();

  return (
    <div className="favorites">
       <NavBar title="Favorites" route="/watch" ></NavBar> 

      <div className="favorites-grid">
        {favorites.length === 0 ? (
          <p>Aucun film ajouté aux favoris pour le moment.</p>
        ) : (
          favorites.map((movie) => (
            <div key={movie.id} className="movie-card-container">
              <MovieCard movie={movie} />
              <RemoveFavoriteButton
                movieId={movie.id} 
                handleRemoveFavorite={handleRemoveFavorite} 
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;
