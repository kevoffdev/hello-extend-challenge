import {useFavoriteContext} from "@/app/hooks/useFavoriteContext";
import {HeartIcon} from "@/assets/icons";

export function CardDog({dog}: {dog: string}) {
  const {favoriteDogs, handleFavoritesDogs} = useFavoriteContext();

  return (
    <article className="relative h-44 w-full">
      <img alt={dog} className="h-full w-full rounded-md" src={dog} />
      <button
        className="absolute bottom-0 right-0 m-2"
        type="button"
        onClick={() => handleFavoritesDogs(dog)}
      >
        <HeartIcon color={`${favoriteDogs.includes(dog) ? "red" : "white"}`} />
      </button>
    </article>
  );
}
