// frontend/src/components/FavoritesContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FavoritesContext = createContext();

const FavoritesRickAndMorty = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('http://localhost:5000/favorites');
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };
    fetchFavorites();
  }, []);

  const addFavorite = async (item) => {
    try {
      await axios.post('http://localhost:5000/favorites', item);
      setFavorites((prevFavorites) => [...prevFavorites, item]);
      console.log(favorites)
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  const removeFavorite = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/favorites/${id}`);
      setFavorites(favorites.filter(fav => fav.id !== id));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  const isFavorite = (id) => favorites.some(fav => fav.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesRickAndMorty;
