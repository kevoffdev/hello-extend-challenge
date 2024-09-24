"use client";

import {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";

import {Dog} from "./types";

export const FavoriteContext = createContext<{
  favorites: Dog["url"][];
  setFavorites: Dispatch<SetStateAction<Dog["url"][]>>;
  handleFavoritesDogs: (dog: Dog["url"]) => void;
}>({
  favorites: [],
  setFavorites: () => {},
  handleFavoritesDogs: () => {},
});

export default function FavoriteProvider({children}: {children: React.ReactNode}) {
  const [favorites, setFavorites] = useState<Dog["url"][]>([]);

  function handleFavoritesDogs(dog: Dog["url"]) {
    if (favorites.includes(dog)) {
      const newFavoriteDogs = favorites.filter((item) => item !== dog);

      localStorage.setItem("favorites", JSON.stringify(newFavoriteDogs));

      return setFavorites(newFavoriteDogs);
    } else {
      setFavorites(() => {
        const newFavoriteDogs = favorites.concat(dog);

        localStorage.setItem("favorites", JSON.stringify(newFavoriteDogs));

        return newFavoriteDogs;
      });
    }
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites") as Dog["url"]) as Dog["url"][] | null;

    setFavorites((prevValue) => {
      return data ? data : prevValue;
    });
  }, []);

  return (
    <FavoriteContext.Provider value={{favorites, setFavorites, handleFavoritesDogs}}>
      {children}
    </FavoriteContext.Provider>
  );
}
