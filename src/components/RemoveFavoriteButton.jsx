import React from 'react';
import '../style/RemoveButton.css'

const RemoveFavoriteButton = ({ movieId, handleRemoveFavorite }) => {
  return (
    <button 
      onClick={() => handleRemoveFavorite(movieId)}
      className="remove-btn"
    >
      Retirer des favoris
    </button>
  );
};

export default RemoveFavoriteButton;
