import React, { useState } from "react";
import tw from "twin.macro";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, connectSearchBox } from "react-instantsearch-dom";

import Results from "./searchAlgoliaResults";
import { useDebounce } from "rooks";
import Icon from "./icon";

// TODO move to config
const APP_ID = "X8T4AMEJOW";
const APP_KEY = "08dcef8c4e952bf3b1368cb1c50d2985";
const INDEX_NAME = `netlify_a4cc0783-462c-4bfb-9832-0158cef4e1ff_3022_all`;

const algoliaClient = algoliasearch(APP_ID, APP_KEY);

let firstLoad = true;

// hack to prevent it calling algolia each page load
const searchClient = {
  search(requests) {
    console.log("requested", requests[0].params.query);
    if (firstLoad === true) {
      firstLoad = false;
      return;
    }
    if (requests[0].params.query === "") {
      return;
    }
    return algoliaClient.search(requests);
  },
};

const SearchBox = ({ refine }) => {
  const setValueDebounced = useDebounce(refine, 500);
  return (
    <input
      placeholder="Search"
      aria-label="Search"
      type="search"
      css={[
        tw`block w-full bg-white border pl-10 border-gray-300 rounded-md py-2 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`,
        // hasFocus ? tw`pl-3` : tw`pl-10`,
      ]}
      onChange={(e) => {
        setValueDebounced(e.target.value);
      }}
    />
  );
};

const ConnectedSearchBox = connectSearchBox(SearchBox);

export default function SearchAgolia() {
  const [focused, setFocus] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <div
      tw="w-full"
      onFocus={() => setFocus(true)}
      onBlur={() => setTimeout(() => setFocus(false), 200)}
    >
      <InstantSearch
        searchClient={searchClient}
        indexName={INDEX_NAME}
        onSearchStateChange={(state) => setQuery(state.query)}
      >
        <label htmlFor="search" tw="sr-only">
          Search
        </label>
        <div tw="relative">
          <div tw="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <Icon icon="search" tw="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <ConnectedSearchBox />
          <div tw="absolute mt-3 w-screen max-w-md right-0">
            <Results hidden={!focused || !query} />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}
