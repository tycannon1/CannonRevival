
import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const ShopCard = ({ product }) => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userId);
  const favorites = useSelector(state => state.favorites);

  // Determine if the current product is marked as a favorite
  const isFavorite = favorites.some(favorite => favorite.productId === product.productId);

  // Function to handle adding a product to favorites
  const handleAddToFavorites = async () => {
    try {
      // Send a request to the backend to add the product to favorites
      const response = await axios.post('/api/add-to-favorites', { userId, productId: product.productId });

      if (response.status === 201) {
        // Dispatch an action to update the state in Redux store
        dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
      }
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  // Function to handle removing a product from favorites
  const handleRemoveFromFavorites = async () => {
    try {
      // Send a request to the backend to remove the product from favorites
      const response = await axios.post('/api/remove-from-favorites', { userId, productId: product.productId });

      if (response.status === 200) {
        // Dispatch an action to update the state in Redux store
        dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product.productId });
      }
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

  return (
    <div className="shop-card">
      <h3>{product.productName}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      {userId ? (
        <div>
          {isFavorite ? (
            <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
          ) : (
            <button onClick={handleAddToFavorites}>Add to Favorites</button>
          )}
        </div>
      ) : (
        <p>Please log in to add to favorites</p>
      )}
    </div>
  );
};

export default ShopCard;