import React from 'react';
import ButtonLink from './buttonLink';

const BlogPagination = ({ i18n, pagination, noScroll }) => {
  const { page, pages, firstPage } = pagination;
  let prevPage = page === 2 ? firstPage : `${firstPage}page/${page - 1}/`;
  if (page === 1) {
    prevPage = null;
  }
  const nextPage = page === pages ? null : `${firstPage}page/${page + 1}/`;
  const lastPage = `${firstPage}page/${pages}/`;
  return (
    <div className="blog-pagination">
      <div className="text-left">
        {prevPage && (
          <span className="merged-buttons">
            <ButtonLink
              to={firstPage}
              notLocalized
              noScroll={noScroll}
              title={i18n.firstPage}
              onlyIcon
              icon="angle-double-left"
            />
            <ButtonLink
              to={prevPage}
              notLocalized
              noScroll={noScroll}
              title={i18n.previousPage}
              text={i18n.previousPage}
              back
            />
          </span>
        )}
      </div>
      <small className="text-center">{`Page ${page} of ${pages}`}</small>
      <div className="text-right merged-buttons">
        {nextPage && (
          <>
            <ButtonLink
              to={nextPage}
              notLocalized
              noScroll={noScroll}
              text={i18n.nextPage}
              title={i18n.nextPage}
              next
            />
            <ButtonLink
              to={lastPage}
              notLocalized
              noScroll={noScroll}
              title={i18n.lastPage}
              onlyIcon
              icon="angle-double-right"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPagination;
