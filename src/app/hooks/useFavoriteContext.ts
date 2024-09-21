import {useContext} from "react";

import {FavoriteContext} from "../favorites-provider";

export const useFavoriteContext = () => {
  const {favoriteDogs, setFavoriteDogs, handleFavoritesDogs} = useContext(FavoriteContext);

  return {favoriteDogs, setFavoriteDogs, handleFavoritesDogs};
};
