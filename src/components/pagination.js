import { navigate } from "gatsby-link";
import React, { useEffect } from "react";
import tw from "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";
import scrollToElement from "../utils/scrollToElement";
import Icon from "./icon";

function splitSlug(slug) {
  return { date: slug.slice(0, 10), title: slug.slice(11) };
}

function comapreSlugs(slug1, slug2) {
  const s1 = splitSlug(slug1);
  const s2 = splitSlug(slug2);
  if (s1.date > s2.date) {
    return true;
  }
  if (s1.date === s2.date) {
    return s1.title < s2.title;
  }
  return false;
}

export default function Pagination({ pageContext }) {
  // TODO i18n
  // if we have hash in the url, try to click that item after we've loaded the content
  // otherwise redirect to the correct page, and try again
  const { currentPage, numPages, filterBase } = pageContext;
  useEffect(() => {
    if (window.location.hash) {
      const elementId = window.location.hash.slice(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.click();
        scrollToElement(elementId, 160);
      } else if (pageContext.slugs) {
        function navTo(page) {
          const url =
            page === 0 ? filterBase : `${filterBase}/page/${page + 1}`;
          navigate(`${url}#${elementId}`, {
            replace: true,
          });
        }
        pageContext.slugs.every((slug, i) => {
          if (slug === elementId || comapreSlugs(elementId, slug)) {
            navTo(i);
            return false;
          }
          if (i === pageContext.slugs.length - 1) {
            navTo(pageContext.slugs.length);
            return false;
          }
          return true;
        });
      }
    }
  }, [pageContext, filterBase, currentPage]);
  if (numPages === 1) {
    return null;
  }
  const btnStyle = tw`border-b-2 space-x-3 border-transparent py-4 px-1.5 md:px-3 inline-flex items-center text-sm font-medium hover:text-shade-dark hover:border-shade-light`;
  return (
    <nav tw="border-b border-shade-lighter flex items-center justify-between -mx-2 px-2 text-shade-light">
      <div tw="-mt-px w-0 flex-1 flex">
        {currentPage !== 1 && (
          <>
            <LocalizedLink to={filterBase} css={btnStyle}>
              <Icon icon="leftDouble" tw="h-4" aria-hidden="true" />
            </LocalizedLink>
            <LocalizedLink
              to={
                currentPage === 2
                  ? filterBase
                  : `${filterBase}/page/${currentPage - 1}`
              }
              css={btnStyle}
            >
              <Icon icon="left" tw="h-4" aria-hidden="true" />
              <span>Previous</span>
            </LocalizedLink>
          </>
        )}
      </div>
      <div tw="-mt-px flex">
        <span tw="border-transparent border-b-2 py-4 inline-flex items-center text-sm font-medium">
          Page {currentPage} of {numPages}
        </span>
      </div>
      <div tw="-mt-px w-0 flex-1 flex justify-end">
        {currentPage !== numPages && (
          <>
            <LocalizedLink
              to={`${filterBase}/page/${currentPage + 1}`}
              css={btnStyle}
            >
              <span>Next</span>
              <Icon icon="right" tw="h-4" aria-hidden="true" />
            </LocalizedLink>
            <LocalizedLink to={`${filterBase}/page/${numPages}`} css={btnStyle}>
              <Icon icon="rightDouble" tw="h-4" aria-hidden="true" />
            </LocalizedLink>
          </>
        )}
      </div>
    </nav>
  );
}
