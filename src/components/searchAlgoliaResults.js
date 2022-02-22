import React, { useEffect } from "react";
import "twin.macro";
import { connectStateResults } from "react-instantsearch-dom";
import { Index } from "react-instantsearch-dom";

import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Icon from "./icon";
import ResultsItems from "./searchAlgoliaResultsItem";

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

export default function SearchResults({
  setResultsCount,
  info: { count, searching },
}) {
  const {
    locale,
    globals: {
      ui: { htmlLang },
    },
  } = useLocalization();
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
    </>
  );
}
