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
    <>
      {prevPage && firstPage && <Link to={firstPage}>First</Link>}
      {'  '}
      {prevPage && <Link to={prevPage}>Previous</Link>}
      {' | '}
      {nextPage && <Link to={nextPage}>Next</Link>}
      {'  '}
      {lastPage && <Link to={lastPage}>Last</Link>}
    </>
  );
};
export default NewsPagination;
