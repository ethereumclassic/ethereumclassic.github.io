import React from "react";
import "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";
import Icon from "./icon";

export default function NewsPagination({ pageContext }) {
  // TODO i18n
  const { currentPage, numPages, filterBase } = pageContext;
  return (
    <nav tw="border-b border-shade-lighter px-4 flex items-center justify-between sm:px-0">
      <div tw="-mt-px w-0 flex-1 flex">
        {currentPage !== 1 && (
          <>
            <LocalizedLink
              to={filterBase}
              tw="border-b-2 border-transparent pb-4 pr-1 inline-flex items-center text-sm font-medium text-shade-neutral hover:text-shade-dark hover:border-shade-light"
            >
              <Icon
                icon="leftDouble"
                tw="mr-3 h-4 text-shade-light"
                aria-hidden="true"
              />
            </LocalizedLink>
            <LocalizedLink
              to={
                currentPage === 2
                  ? filterBase
                  : `${filterBase}/page/${currentPage - 1}`
              }
              tw="border-b-2 border-transparent pb-4 pr-1 inline-flex items-center text-sm font-medium text-shade-neutral hover:text-shade-dark hover:border-shade-light"
            >
              <Icon
                icon="left"
                tw="mr-3 h-4 text-shade-light"
                aria-hidden="true"
              />
              Previous
            </LocalizedLink>
          </>
        )}
      </div>
      <div tw="-mt-px flex">
        <span tw="border-transparent text-shade-neutral border-b-2 pb-4 px-4 inline-flex items-center text-sm font-medium">
          Page {currentPage} of {numPages}
        </span>
      </div>
      <div tw="-mt-px w-0 flex-1 flex justify-end">
        {currentPage !== numPages && (
          <>
            <LocalizedLink
              to={`${filterBase}/page/${currentPage + 1}`}
              tw="border-b-2 border-transparent pb-4 pl-1 inline-flex items-center text-sm font-medium text-shade-neutral hover:text-shade-dark hover:border-shade-light"
            >
              Next
              <Icon
                icon="right"
                tw="ml-3 h-4 text-shade-light"
                aria-hidden="true"
              />
            </LocalizedLink>
            <LocalizedLink
              to={`${filterBase}/page/${numPages}`}
              tw="border-b-2 border-transparent pb-4 pl-1 inline-flex items-center text-sm font-medium text-shade-neutral hover:text-shade-dark hover:border-shade-light"
            >
              <Icon
                icon="rightDouble"
                tw="ml-3 h-4 text-shade-light"
                aria-hidden="true"
              />
            </LocalizedLink>
          </>
        )}
      </div>
    </nav>
  );
}
