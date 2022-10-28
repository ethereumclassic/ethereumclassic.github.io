import React, { useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import algoliasearch from "algoliasearch/lite";
import { useDebounce } from "rooks";
import { InstantSearch, connectSearchBox } from "react-instantsearch-dom";

import Md from "./markdownDynamic";
import Icon from "./icon";
import Fader from "./fader";
import SearchResults from "./searchAlgoliaResults";
import Link from "./link";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
// import isSSR from "../utils/isSSR";

const algoliaAppId = process.env.ALGOLIA_APP_ID;
const algoliaApiKey = process.env.ALGOLIA_SEARCH_KEY;
const algoliaIndex = process.env.ALGOLIA_MAIN_INDEX || "placeholder";

const SearchBox = connectSearchBox(({ refine }) => {
  const { ui } = useGlobals();
  const setValueDebounced = useDebounce(refine, 500);
  return (
    <input
      className="peer"
      placeholder={ui.search.box}
      aria-label="Search"
      type="search"
      tw="block w-full bg-backdrop-light border pl-10 border-shade-lighter rounded-md py-2 pr-3 text-sm placeholder-shade-light focus:outline-none focus:ring-0 focus:border-shade-light"
      onChange={(e) => {
        setValueDebounced(e.target.value);
      }}
    />
  );
});

export default function SearchAgolia({ inline }) {
  const {
    ui: { search: i18n },
  } = useGlobals();
  const [focused, setFocus] = useState(false);
  const [query, setQuery] = useState("");
  const aSearch = useRef(null);
  useEffect(() => {
    aSearch.current = algoliasearch(algoliaAppId, algoliaApiKey);
  }, []);
  const search = {
    search(requests) {
      const thisQuery = requests[0].params.query;
      if (thisQuery === "" || thisQuery.startsWith("0x")) {
        return;
      }
      return aSearch.current.search(requests);
    },
  };
  const showModal = !!(focused && query);
  const explorerHint = query?.startsWith("0x");
  const showResults = showModal && !explorerHint;
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
          {i18n.box}
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
        <Fader show={showModal}>
          <div tw="absolute p-2 transition transform origin-top-right backdrop-blur-xl bottom-0 top-14 right-0 left-0 h-screen">
            <div tw="md:max-w-2xl bg-backdrop-light mx-auto shadow-2xl rounded-2xl overflow-hidden">
              {explorerHint && (
                <div tw="prose text-center m-8 space-y-8">
                  <div>{i18n.txSearch}</div>
                  <Link
                    iconLeft="search"
                    button
                    big
                    primary
                    to={`https://blockscout.com/etc/mainnet/search-results?q=${query}`}
                  >
                    {i18n.blockScout}
                    <span tw="ml-2 font-mono bg-secondary-darkest px-1">
                      {query.slice(0, 7)}..
                    </span>
                  </Link>
                  <div>
                    <Md unwrap>{i18n.explorers}</Md>
                  </div>
                </div>
              )}
              {showResults && <SearchResults />}
            </div>
          </div>
        </Fader>
      </InstantSearch>
    </div>
  );
}
