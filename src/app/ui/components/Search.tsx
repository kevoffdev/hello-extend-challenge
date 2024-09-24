import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import {useEffect, useState} from "react";

import {SearchIcon} from "@/assets/icons";
import {useDebounce} from "@/app/hooks/useDebounce";

export function Search() {
  const pathname = usePathname();
  const [search, setSearch] = useState(pathname.replace("/", ""));
  const {replace} = useRouter();
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    if (debouncedSearch) {
      replace(`/${debouncedSearch}`);
    } else {
      replace(`/`);
    }
  }, [debouncedSearch, replace]);

  return (
    <div className="flex justify-center">
      <input
        className="w-80 rounded-md bg-gray-600 p-2 text-white"
        placeholder="Affenpinscher"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <Link
        className="flex w-32 gap-2 rounded-md bg-blue-500 p-2 px-4 transition hover:bg-blue-600"
        href={`/${search}`}
      >
        <div>
          <SearchIcon />
        </div>
        <p>Search</p>
      </Link>
    </div>
  );
}
