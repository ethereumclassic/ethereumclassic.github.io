import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import "twin.macro";

export default function Search() {
  return (
    <div tw="w-full">
      <label htmlFor="search" tw="sr-only">
        Search
      </label>
      <div tw="relative">
        <div tw="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
          <SearchIcon tw="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          id="search"
          name="search"
          tw="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search"
          type="search"
        />
      </div>
    </div>
  );
}
