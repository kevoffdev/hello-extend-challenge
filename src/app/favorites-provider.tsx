"use client";

import {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";

import {Dog} from "./types";

export const FavoriteContext = createContext<{
  favoriteDogs: Dog["url"][];
  setFavoriteDogs: Dispatch<SetStateAction<Dog["url"][]>>;
  handleFavoritesDogs: (dog: Dog["url"]) => void;
}>({
  favoriteDogs: [],
  setFavoriteDogs: () => {},
  handleFavoritesDogs: () => {},
});

export default function FavoriteProvider({children}: {children: React.ReactNode}) {
  const [favoriteDogs, setFavoriteDogs] = useState<Dog["url"][]>([]);

  function handleFavoritesDogs(dog: Dog["url"]) {
    if (favoriteDogs.includes(dog)) {
      const newFavoriteDogs = favoriteDogs.filter((item) => item !== dog);

      localStorage.setItem("favorites", JSON.stringify(newFavoriteDogs));

      return setFavoriteDogs(newFavoriteDogs);
    } else {
      setFavoriteDogs(() => {
        const newFavoriteDogs = favoriteDogs.concat(dog);

        localStorage.setItem("favorites", JSON.stringify(newFavoriteDogs));

        return newFavoriteDogs;
      });
    }
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites") as Dog["url"]) as Dog["url"][] | null;

    setFavoriteDogs((prevValue) => {
      return data ? data : prevValue;
    });
  }, []);

  return (
    <FavoriteContext.Provider value={{favoriteDogs, setFavoriteDogs, handleFavoritesDogs}}>
      {children}
    </FavoriteContext.Provider>
  );
}
