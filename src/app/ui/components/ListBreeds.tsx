import Link from "next/link";

import {useDogsContext} from "@/app/hooks/useDogsContext";

export function ListBreeds() {
  const {state} = useDogsContext();

  return (
    <div className="flex justify-between gap-4 pt-8 text-lg">
      {state.allBreedsDogs
        .slice(state.adjustedBreedCount - 8, state.adjustedBreedCount)
        .map((breed) => (
          <Link key={breed} className="capitalize" href={`/${breed}`}>
            {breed}
          </Link>
        ))}
    </div>
  );
}
