"use client";
import {useFavoriteContext} from "@/app/hooks/useFavoriteContext";
import {HeartIcon} from "@/assets/icons";

export function CardDog({dog}: {dog: string}) {
  const {favorites, handleFavoritesDogs} = useFavoriteContext();

  return (
    <article className="relative w-full">
      <img alt={dog} className="h-64 w-full rounded-md object-cover" src={dog} />
      <button
        className="absolute bottom-0 right-0 m-2"
        type="button"
        onClick={() => handleFavoritesDogs(dog)}
      >
        <HeartIcon color={`${favorites.includes(dog) ? "red" : "white"}`} />
      </button>
    </article>
  );
}
