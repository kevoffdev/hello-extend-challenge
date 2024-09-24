"use client";
import {useDogsContext} from "@/app/hooks/useDogsContext";
import {HeartIcon} from "@/assets/icons";

export function CardDog({dog}: {dog: string}) {
  const {state, actions} = useDogsContext();

  return (
    <article className="relative w-full">
      <img alt={dog} className="h-64 w-full rounded-md object-cover" src={dog} />
      <button
        className="absolute bottom-0 right-0 m-2"
        type="button"
        onClick={() => actions.handleFavoritesDogs(dog)}
      >
        <HeartIcon color={`${state.favorites.includes(dog) ? "red" : "white"}`} />
      </button>
    </article>
  );
}
