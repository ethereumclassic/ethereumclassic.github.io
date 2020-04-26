import React from 'react';

import Link from './Link';

const NewsPagination = ({ filterBase: firstPage, numPages, currentPage }) => {
  if (numPages === 1) {
    return null;
  }
  let prevPage = currentPage === 2 ? firstPage : `${firstPage}/page/${currentPage - 1}/`;
  if (currentPage === 1) {
    prevPage = null;
  }
  const nextPage = currentPage !== numPages && `${firstPage}/page/${currentPage + 1}/`;
  const lastPage = numPages !== 1 && numPages !== currentPage && `${firstPage}/page/${numPages}/`;
  return (
    <div className="grid">
      <div>
        {prevPage && firstPage && (
          <Link className="button" to={firstPage}>
            First
          </Link>
        )}
        {prevPage && (
          <Link className="button" to={prevPage}>
            Previous
          </Link>
        )}
      </div>
      <div className="text-center">{`Page ${currentPage} of ${numPages}`}</div>
      <div className="text-right">
        {nextPage && (
          <Link className="button" to={nextPage}>
            Next
          </Link>
        )}
        {lastPage && (
          <Link className="button" to={lastPage}>
            Last
          </Link>
        )}
      </div>
    </div>
  );
};
export default NewsPagination;
