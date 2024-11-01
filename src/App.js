import React from "react";
import Banner from "./components/Banner";
import HeadlineCards from "./components/HeadlineCards";
import FavoritesRickAndMorty from "./components/favorites";

function App() {
  return (
    <div className="bg-site bg-attachment bg-center bg-auto overflow-hidden">
      <Banner />
      <FavoritesRickAndMorty>
        <HeadlineCards />
      </FavoritesRickAndMorty>
    </div>
  );
}

export default App;
