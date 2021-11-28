import React from "react";
import "twin.macro";
import { connectStateResults, Snippet } from "react-instantsearch-dom";

import Link from "./link";

import { connectPoweredBy } from "react-instantsearch-dom";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

const PoweredBy = ({ url }) => (
  <a href={url} target="_blank" rel="noreferrer">
    Powered by Algolia
  </a>
);

const CustomPoweredBy = connectPoweredBy(PoweredBy);

function Wrapper({ children }) {
  return (
    <div tw="bg-white shadow-lg rounded-md text-base ring-1 ring-black ring-opacity-5 mr-auto overflow-hidden">
      {children}
      <div tw="text-right text-sm text-gray-400 bg-gray-100 pr-4">
        <CustomPoweredBy />
      </div>
    </div>
  );
}

export default connectStateResults((props) => {
  const { ui } = useGlobals();
  const { searchResults, searching, hidden } = props;
  const hitCount = searchResults && searchResults.nbHits;
  if (hidden || searching) {
    return null;
  }
  if (hitCount < 1) {
    return (
      <Wrapper>
        <div tw="p-4">{ui.noResults}</div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div tw="overflow-y-scroll divide-y divide-solid divide-gray-100 max-h-[70vh]">
        {searchResults.hits.map((hit) => (
          <Link
            to={hit.url}
            key={hit.objectID}
            tw="block hover:text-gray-800 hover:bg-green-50 px-4 py-2"
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
      </div>
    </Wrapper>
  );
});
