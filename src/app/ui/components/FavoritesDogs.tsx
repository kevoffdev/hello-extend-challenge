import {CardDog} from "./CardDog";

import {useFavoriteContext} from "@/app/hooks/useFavoriteContext";
import {HeartIcon} from "@/assets/icons";

export function FavoritesDogs() {
  const {favoriteDogs} = useFavoriteContext();

  return (
    <div className="py-8" id="favorites">
      <div className="flex items-center gap-2">
        <HeartIcon color="red" />
        <span className="text-2xl font-bold leading-[4rem]">Favorites</span>
      </div>
      {favoriteDogs.length ? (
        <div className="grid grid-cols-3 gap-4 py-8">
          {favoriteDogs.map((dog) => (
            <CardDog key={dog} dog={dog} />
          ))}
        </div>
      ) : (
        <p className="text-center leading-[4rem] opacity-40">Dogs favorites empty</p>
      )}
    </div>
  );
}
