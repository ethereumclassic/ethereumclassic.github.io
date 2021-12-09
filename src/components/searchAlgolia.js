// TODO refactor this!
import React, { useEffect, useRef, useState } from "react";
import "twin.macro";
import algoliasearch from "algoliasearch/lite";
import { useDebounce } from "rooks";
import { connectPoweredBy } from "react-instantsearch-dom";
import { InstantSearch, connectSearchBox } from "react-instantsearch-dom";

import Icon from "./icon";
import Fader from "./fader";
import SearchResults from "./searchAlgoliaResults";

const algoliaAppId = process.env.ALGOLIA_APP_ID;
const algoliaApiKey = process.env.ALGOLIA_SEARCH_KEY;
const algoliaIndex = process.env.ALGOLIA_MAIN_INDEX;

const SearchBox = connectSearchBox(({ refine }) => {
  const setValueDebounced = useDebounce(refine, 500);
  return (
    <input
      placeholder="Search"
      aria-label="Search"
      type="search"
      tw="block w-full bg-backdrop-light border pl-10 border-shade-lighter rounded-md py-2 pr-3 text-sm placeholder-shade-light focus:outline-none focus:ring-0 focus:border-shade-light"
      onChange={(e) => {
        setValueDebounced(e.target.value);
      }}
    />
  );
});

const PoweredBy = connectPoweredBy(({ url }) => (
  <a href={url} target="_blank" rel="noreferrer">
    Powered by Algolia
  </a>
));

export default function SearchAgolia({ inline }) {
  const [focused, setFocus] = useState(false);
  const [query, setQuery] = useState("");
  const [resultsCount, setResultsCount] = useState({});
  function setResults(title, count, searching) {
    setResultsCount({
      [query]: {
        ...resultsCount[query],
        [title]: { count, searching },
      },
    });
  }
  const aSearch = useRef(null);
  useEffect(() => {
    aSearch.current = algoliasearch(algoliaAppId, algoliaApiKey);
  }, []);
  const search = {
    search(requests) {
      if (requests[0].params.query === "") {
        return;
      }
      return aSearch.current.search(requests);
    },
  };
  const show = !!(focused && query);
  const info = Object.keys(resultsCount[query] || {}).reduce((o, k) => {
    const { count, searching } = resultsCount[query][k];
    return {
      ...o,
      count: (o.count || 0) + count,
      searching: searching || !!o.searching,
    };
  }, {});
  return (
    <div
      tw="w-full"
      onFocus={() => setFocus(true)}
      onBlur={() => setTimeout(() => setFocus(false), 200)}
    >
      <InstantSearch
        searchClient={search}
        indexName={algoliaIndex}
        onSearchStateChange={(state) => {
          setTimeout(() => {
            setQuery(state.query);
          }, 10);
        }}
      >
        <label htmlFor="search" tw="sr-only">
          Search
        </label>
        <div tw="relative">
          <div tw="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <Icon
              icon="search"
              tw="h-4 text-shade-lighter"
              aria-hidden="true"
            />
          </div>
          <SearchBox inline={inline} />
        </div>
        <Fader show={show}>
          <div tw="absolute p-2 transition transform origin-top-right backdrop-blur-xl bottom-0 top-14 right-0 left-0 h-screen">
            <div tw="md:max-w-2xl bg-backdrop-light mx-auto shadow-2xl rounded-2xl overflow-hidden">
              <div tw="overflow-y-auto divide-y divide-solid divide-shade-lightest max-h-[40vh] md:max-h-[70vh]">
                {show && (
                  <SearchResults setResultsCount={setResults} info={info} />
                )}
              </div>
              <div tw="flex items-center text-sm text-shade-neutral bg-shade-lightest py-1 px-4">
                <div tw="flex-auto">
                  {!!info.count && `${info.count} Results`}
                </div>
                <PoweredBy />
              </div>
            </div>
          </div>
        </Fader>
      </InstantSearch>
    </div>
  );
}
