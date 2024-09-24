import {useContext} from "react";

import {FavoriteContext} from "../favorites-provider";

export const useFavoriteContext = () => {
  const {favorites, setFavorites, handleFavoritesDogs} = useContext(FavoriteContext);

  return {favorites, setFavorites, handleFavoritesDogs};
};
