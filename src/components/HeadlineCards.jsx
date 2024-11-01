// frontend/src/components/HeadlineCards.js
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FavoritesContext } from "./favorites";

const HeadlineCards = () => {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [locations, setLocations] = useState([]);
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characterResponse = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(characterResponse.data.results);

        const episodeResponse = await axios.get(
          "https://rickandmortyapi.com/api/episode"
        );
        setEpisodes(episodeResponse.data.results);

        const locationResponse = await axios.get(
          "https://rickandmortyapi.com/api/location"
        );
        setLocations(locationResponse.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFavoriteClick = (item) => {
    if (isFavorite(item.id)) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  };

  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 space-y-12">
      <h2 className="text-3xl font-bold mb-6 text-white text-center text-yellow-300">
        Rick and Morty Information
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.slice(0, 6).map((character, index) => {
          const episode = episodes[index] || {};
          const location = locations[index] || {};

          return (
            <div
              key={character.id}
              className="rounded-xl bg-gray-800 p-4 text-white cursor-pointer"
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full rounded-lg mb-4"
              />
              <h3 className="font-bold text-2xl">{character.name}</h3>
              <p>Species: {character.species}</p>
              <p>Status: {character.status}</p>

              <div className="mt-4">
                <h4 className="font-bold text-xl">Episode Information</h4>
                <p>Episode: {episode.episode || "N/A"}</p>
                <p>Name: {episode.name || "N/A"}</p>
                <p>Air Date: {episode.air_date || "N/A"}</p>
              </div>

              <div className="mt-4">
                <h4 className="font-bold text-xl">Location Information</h4>
                <p>Name: {location.name || "N/A"}</p>
                <p>Type: {location.type || "N/A"}</p>
                <p>Dimension: {location.dimension || "N/A"}</p>
              </div>

              <button
                onClick={() => handleFavoriteClick(character)}
                className={`mt-4 p-2 text-xl rounded-lg ${
                  isFavorite(character.id) ? "text-red-500" : "text-blue-500"
                }`}
              >
                {isFavorite(character.id) ? "❤️" : "🤍"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeadlineCards;
