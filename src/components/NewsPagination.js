import React from 'react';

import Link from './Link';
import Json from './Json';

const NewsPagination = ({ filterBase: firstPage, numPages, currentPage }) => {
  // const { page, pages, firstPage } = pagination;
  let prevPage = currentPage === 2 ? firstPage : `${firstPage}/page/${currentPage - 1}/`;
  if (currentPage === 1) {
    prevPage = null;
  }
  const nextPage = currentPage === numPages ? null : `${firstPage}/page/${currentPage + 1}/`;
  const lastPage = `${firstPage}/page/${numPages}/`;
  return (
    <>
      {firstPage && <Link to={firstPage}>First</Link>}
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
