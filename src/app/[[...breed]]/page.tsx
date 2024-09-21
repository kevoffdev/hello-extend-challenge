import {Suspense} from "react";

import {CardDogSkeleton} from "../ui/skeleton/CardDogSkeleton";
import {ListDog} from "../ui/components/ListDog";

export default async function Page({params}: {params: {breed: string}}) {
  return (
    <section className="m-auto w-full py-8">
      <Suspense
        fallback={
          <div className="grid grid-cols-3 gap-4 py-8">
            {Array.from({length: 10}).map((_, index) => (
              <CardDogSkeleton key={index!} />
            ))}
          </div>
        }
      >
        <ListDog breed={params.breed} />
      </Suspense>
    </section>
  );
}
