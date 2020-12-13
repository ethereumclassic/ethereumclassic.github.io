/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const Search = ({ i18n }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query || !window.__LUNR__) {
      setResults([]);
      return;
    }
    const lunrIndex = window.__LUNR__.en;
    const searchResults = lunrIndex.index.search(query);
    setResults(
      searchResults.map(({ ref }) => {
        return lunrIndex.store[ref];
      })
    );
  }, [query]);

  return (
    <div className="search">
      <input
        type="text"
        defaultValue={query}
        placeholder={` \uf002 ${i18n.search}`}
        onChange={event => {
          setQuery(event.target.value);
        }}
      />
      {results.length > 0 && (
        <div className="cells results scrolly">
          {results.map(({ url, title, description }) => {
            return (
              <Link to={url} className="cell" key={url}>
                <span>{title}</span>
                {description}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
