import React, { createContext, useEffect, useReducer } from "react";
import { favoriteReducer } from "../reducers/favoritesReducer";

export const FavContext = createContext({});

export const FavProvider = (props) => {
  const [favorites, dispatch] = useReducer(favoriteReducer, [], () => {
    const storedFav = localStorage.getItem("favorites");
    return storedFav ? JSON.parse(storedFav) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Make the context object:
  const favContext = {
    favorites,
    dispatch,
  };

  // pass the value in provider and return
  return (
    <FavContext.Provider value={favContext}>
      {props.children}
    </FavContext.Provider>
  );
};
