import {CardDog} from "./CardDog";

import {useDogsContext} from "@/app/hooks/useDogsContext";
import {HeartIcon} from "@/assets/icons";

export function FavoritesDogs() {
  const {state} = useDogsContext();

  return (
    <div className="py-8" id="favorites">
      <div className="flex items-center gap-2">
        <HeartIcon color="red" />
        <span className="text-2xl font-bold leading-[4rem]">Favorites</span>
      </div>
      {state.favorites.length ? (
        <div className="grid grid-cols-3 gap-4 py-8">
          {state.favorites.map((dog) => (
            <CardDog key={dog} dog={dog} />
          ))}
        </div>
      ) : (
        <p className="text-center leading-[4rem] opacity-40">Dogs favorites empty</p>
      )}
    </div>
  );
}
