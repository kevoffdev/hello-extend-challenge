export const getMultipleRandomDogs = async () => {
  return await fetch("https://dog.ceo/api/breeds/image/random/10")
    .then((resp) => resp.json() as Promise<{message: string[]; status: string}>)
    .then((dogs) => ({
      dogs: dogs.message.map((dog) => {
        return {
          url: dog,
          id: crypto.randomUUID(),
        };
      }),
      status: dogs.status,
    }))
    .catch((err) => {
      return {
        dogs: [],
        status: "error",
      };
    });
};

export const getDogByBreed = async (breed: string) => {
  return await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((resp) => resp.json() as Promise<{message: string[]; status: string}>)
    .then((dogs) => ({
      dogs: dogs.message.map((dog) => {
        return {
          url: dog,
          id: crypto.randomUUID(),
        };
      }),
      status: dogs.status,
    }))
    .catch((err) => {
      return {
        dogs: [],
        status: "error",
      };
    });
};
