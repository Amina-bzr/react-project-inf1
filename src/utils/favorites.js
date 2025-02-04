// Récupérer les favoris depuis localStorage
export const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  };
  
  // Ajouter un film aux favoris
  export const addFavorite = (movie) => {
    let favorites = getFavorites();
    if (!favorites.some(fav => fav.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };
  
  // Supprimer un film des favoris
  export const removeFavorite = (movieId) => {
    let favorites = getFavorites();
    favorites = favorites.filter(movie => movie.id !== movieId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  
  // Vérifier si un film est en favoris
  export const isFavorite = (movieId) => {
    let favorites = getFavorites();
    return favorites.some(movie => movie.id === movieId);
  };
  