"use client";

import { useRouter } from "next/navigation";
import { use, useState } from "react";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) return;

    // console.log("search text here, ", searchText);

    router.push(`/events/${searchText}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none 
          ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        value={searchText}
        placeholder="search any events in the city"
        spellCheck={false}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
