"use client";

import {FavoritesDogs} from "./FavoritesDogs";
import {CardDog} from "./CardDog";

import {Dog} from "@/app/types";

export function Dogs({dogs}: {dogs: Dog[]}) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 py-8">
        {dogs.slice(0, 10).map((dog) => (
          <CardDog key={dog.id} dog={dog.url} />
        ))}
      </div>
      <div className="h-0.5 bg-gray-500" />
      <FavoritesDogs />
    </>
  );
}
