import React, { useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import algoliasearch from "algoliasearch/lite";
import { useDebounce } from "rooks";
import { connectPoweredBy } from "react-instantsearch-dom";
import { connectStateResults, Snippet } from "react-instantsearch-dom";
import {
  InstantSearch,
  connectSearchBox,
  Index,
} from "react-instantsearch-dom";
import useSiteMetadata from "../utils/useSiteMetadata";
import Icon from "./icon";
import PopOverContainer from "./popOverContainer";
import Link from "./link";

const SearchBox = ({ refine }) => {
  const setValueDebounced = useDebounce(refine, 500);
  return (
    <input
      placeholder="Search"
      aria-label="Search"
      type="search"
      css={[
        tw`block w-full bg-backdrop-light border pl-10 border-shade-lighter rounded-md py-2 pr-3 text-sm placeholder-shade-light focus:outline-none focus:ring-0 focus:border-shade-light`,
        // hasFocus ? tw`pl-3` : tw`pl-10`,
      ]}
      onChange={(e) => {
        setValueDebounced(e.target.value);
      }}
    />
  );
};

const PoweredBy = ({ url }) => (
  <a href={url} target="_blank" rel="noreferrer">
    Powered by Algolia
  </a>
);

const ResultsBlock = (props) => {
  const { searchResults, searching } = props;
  const hitCount = searchResults && searchResults.nbHits;
  if (searching || hitCount < 1) {
    return null;
  }
  return (
    <>
      <div tw="bg-primary-dark text-primary-lightest px-4 py-2 uppercase">
        {props.title}
      </div>
      {searchResults.hits.map((hit) => (
        <Link
          to={hit.url}
          key={hit.objectID}
          tw="block hover:text-shade-darker hover:bg-primary-lightest px-4 py-2"
        >
          <div tw="font-bold">
            {/* TODO refile search results */}
            {hit.title.replace(` - Ethereum Classic`, "")}
          </div>
          <div tw="text-sm line-clamp-2">
            <Snippet hit={hit} attribute="content" />
          </div>
        </Link>
      ))}
    </>
  );
};

const CustomPoweredBy = connectPoweredBy(PoweredBy);
const ConnectedSearchBox = connectSearchBox(SearchBox);
const ConnectedResultsBlock = connectStateResults(ResultsBlock);

function Wrapper({ children }) {
  if (!children) {
    return null;
  }
  return (
    <div tw="absolute mt-1 max-w-md md:max-w-lg right-0 w-screen pl-4">
      <PopOverContainer>
        <div tw="overflow-y-scroll divide-y divide-solid divide-shade-lightest max-h-[40vh]">
          {children}
        </div>
        <div tw="text-right text-sm text-shade-neutral bg-shade-lightest py-1 px-4">
          <CustomPoweredBy />
        </div>
      </PopOverContainer>
    </div>
  );
}

export default function SearchAgolia({ inline }) {
  const { algoliaAppId, algoliaApiKey, algoliaIndex } = useSiteMetadata();
  const [focused, setFocus] = useState(false);
  const [query, setQuery] = useState("");
  const aSearch = useRef(null);
  useEffect(() => {
    aSearch.current = algoliasearch(algoliaAppId, algoliaApiKey);
  }, [algoliaApiKey, algoliaAppId]);
  const search = {
    search(requests) {
      if (requests[0].params.query === "") {
        return;
      }
      return aSearch.current.search(requests);
    },
  };
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
          setTimeout(() => setQuery(state.query), 10);
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
          <ConnectedSearchBox inline={inline} />
          {focused && query && (
            <Wrapper>
              <ConnectedResultsBlock title="Pages" />
              <Index indexName="videos">
                <ConnectedResultsBlock title="Videos" />
              </Index>
              <Index indexName="applications">
                <ConnectedResultsBlock title="Apps" />
              </Index>
              <Index indexName="newsLinks">
                <ConnectedResultsBlock title="News Links" />
              </Index>
            </Wrapper>
          )}
        </div>
      </InstantSearch>
    </div>
  );
}
