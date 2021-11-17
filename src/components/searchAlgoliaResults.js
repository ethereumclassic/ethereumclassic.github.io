import React from "react";
import "twin.macro";
import { connectStateResults, Snippet } from "react-instantsearch-dom";

import Link from "./link";

import { connectPoweredBy } from "react-instantsearch-dom";

const PoweredBy = ({ url }) => <a href={url}>Powered by Algolia</a>;

const CustomPoweredBy = connectPoweredBy(PoweredBy);

function Wrapper({ children }) {
  return (
    <div tw="bg-white p-5 pb-2 mr-auto">
      {children}
      <div tw="text-right">
        <CustomPoweredBy />
      </div>
    </div>
  );
}

export default connectStateResults((props) => {
  const { searchResults, searching, hidden } = props;
  const hitCount = searchResults && searchResults.nbHits;
  if (hidden || searching) {
    return null;
  }
  if (hitCount < 1) {
    return <Wrapper>No Results</Wrapper>;
  }
  return (
    <Wrapper>
      <div tw="overflow-y-scroll max-h-64">
        {searchResults.hits.map((hit) => (
          <Link
            to={hit.url}
            key={hit.objectID}
            tw="block hover:bg-yellow-200 p-2"
          >
            <div tw="font-bold">{hit.title}</div>
            <Snippet hit={hit} attribute="content" />
          </Link>
        ))}
      </div>
    </Wrapper>
  );
});
