import React, { useEffect, useState } from "react";
import "twin.macro";
import {
  connectStateResults,
  connectPoweredBy,
  Index,
} from "react-instantsearch-dom";

import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Icon from "./icon";
import ResultsItems from "./searchAlgoliaResultsItem";

const PoweredBy = connectPoweredBy(({ url }) => (
  <a href={url} target="_blank" rel="noreferrer">
    Powered by Algolia
  </a>
));

const ResultsBlock = connectStateResults(
  ({
    searchResults,
    setResultsCount,
    searching,
    categories,
    title,
    locale,
    lang,
    ...props
  }) => {
    const hits =
      searchResults?.hits.filter(
        (h) => h.lang === lang || h.locale === locale
      ) ?? [];

    useEffect(() => {
      setResultsCount(title, hits.length, searching);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searching, hits.length]);
    if (searching || hits.length < 1) {
      return null;
    }
    if (categories) {
      const cats = hits.reduce((o, h) => {
        const category = categories[h.category];
        if (category) {
          return {
            ...o,
            [h.category]: {
              hits: (o[h.category]?.hits ?? []).concat([h]),
              ...category,
            },
          };
        }
        return o;
      }, {});
      return Object.keys(categories)
        .filter((key) => cats[key])
        .map((key) => <ResultsItems key={key} {...cats[key]} {...props} />);
    }
    return <ResultsItems {...{ title, hits, ...props }} />;
  }
);

export default function SearchResults() {
  const {
    locale,
    globals: {
      ui: { htmlLang },
    },
  } = useLocalization();

  const [results, setResults] = useState({});

  function setResultsCount(title, count, searching) {
    setResults((state) => ({ ...state, [title]: { count, searching } }));
  }
  const { count, searching } = Object.keys(results || {}).reduce((o, k) => {
    return {
      ...o,
      count: (o.count || 0) + results[k].count || 0,
      searching: results[k].searching || !!o.searching,
    };
  }, {});
  return (
    <>
      {(searching || (!count && count !== 0)) && (
        <div tw="py-10 text-secondary-light flex justify-center bg-shade-lightest">
          <Icon icon="spinner" tw="animate-spin h-10" />
        </div>
      )}
      {!searching && count === 0 && (
        <div tw="p-6 flex items-center justify-center text-shade-light space-x-3">
          <Icon icon="sad" tw="h-5" />
          <div>No Results...</div>
        </div>
      )}
      <div tw="overflow-y-auto divide-y divide-solid divide-shade-lightest max-h-[40vh] md:max-h-[70vh]">
        <ResultsBlock
          setResultsCount={setResultsCount}
          lang={htmlLang}
          locale={locale}
          title="General"
          categories={{
            general: {
              title: "General Information",
              icon: "book",
            },
            blog: { title: "Blog Articles", icon: "blog" },
          }}
        />
        <Index indexName="videos">
          <ResultsBlock
            setResultsCount={setResultsCount}
            lang={htmlLang}
            locale={locale}
            title="Videos"
            icon="video"
          />
        </Index>
        <Index indexName="applications">
          <ResultsBlock
            setResultsCount={setResultsCount}
            lang={htmlLang}
            locale={locale}
            title="Apps"
            icon="cursor"
          />
        </Index>
        <Index indexName="newsLinks">
          <ResultsBlock
            setResultsCount={setResultsCount}
            lang={htmlLang}
            locale={locale}
            title="News Links"
            icon="news"
            external
          />
        </Index>
      </div>
      <div tw="flex items-center text-sm text-shade-neutral bg-shade-lightest py-1 px-4">
        <div tw="flex-auto">{!searching && !!count && `${count} Results`}</div>
        <PoweredBy />
      </div>
    </>
  );
}
