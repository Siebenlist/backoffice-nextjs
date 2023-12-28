"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-lg max-w-max">
      <MdSearch />
      <input
        type="search"
        placeholder={placeholder}
        className="bg-transparent"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
