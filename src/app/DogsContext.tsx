"use client";

import {createContext, useEffect, useState} from "react";

import {getAllBreedsDogs} from "../services/index";

import {Dog} from "./types";

interface ContextProps {
  state: {
    favorites: Dog["url"][];
    allBreedsDogs: string[];
    adjustedBreedCount: number;
  };
  actions: {
    handleFavoritesDogs: (dog: Dog["url"]) => void;
  };
}

export const DogsContext = createContext({} as ContextProps);

export default function FavoriteProvider({children}: {children: React.ReactNode}) {
  const [favorites, setFavorites] = useState<Dog["url"][]>([]);
  const [allBreedsDogs, setAllBreedsDogs] = useState<string[]>([]);

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

  const fetchBreeds = async () => {
    const allBreedsDogs = await getAllBreedsDogs();

    setAllBreedsDogs(allBreedsDogs.dogs);
  };

  const randomBreedIndex = Math.floor(Math.random() * allBreedsDogs.length);
  const adjustedBreedCount = randomBreedIndex < 8 ? 8 : randomBreedIndex;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites") as Dog["url"]) as Dog["url"][] | null;

    setFavorites((prevValue) => {
      return data ? data : prevValue;
    });
  }, []);

  useEffect(() => {
    fetchBreeds();
  }, []);

  return (
    <DogsContext.Provider
      value={{
        state: {favorites, adjustedBreedCount, allBreedsDogs},
        actions: {handleFavoritesDogs},
      }}
    >
      {children}
    </DogsContext.Provider>
  );
}
