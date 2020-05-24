import React from 'react';

import Link from './Link';

const NewsPagination = ({ filterBase: firstPage, numPages, currentPage, noScroll }) => {
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
    <div className="news-pagination">
      <div className="merged">
        {prevPage && firstPage && (
          <Link button to={firstPage} noScroll={noScroll} icon="angle-double-left" />
        )}
        {prevPage && (
          <Link button back to={prevPage} noScroll={noScroll}>
            Previous
          </Link>
        )}
      </div>
      <small className="text-center">{`Page ${currentPage} of ${numPages}`}</small>
      <div className="text-right merged">
        {nextPage && (
          <Link button next to={nextPage} noScroll={noScroll}>
            Next
          </Link>
        )}
        {lastPage && <Link button to={lastPage} noScroll={noScroll} icon="angle-double-right" />}
      </div>
    </div>
  );
};
export default NewsPagination;
