import {Dogs} from "./Dogs";

import {getDogByBreed, getMultipleRandomDogs} from "@/services";

export async function ListDog({breed}: {breed: string}) {
  const listDogs = breed ? await getDogByBreed(breed) : await getMultipleRandomDogs();

  if (listDogs.status !== "success") {
    return <div>No se encontró a la raza: {breed}</div>;
  }

  return <Dogs dogs={listDogs.dogs} />;
}
