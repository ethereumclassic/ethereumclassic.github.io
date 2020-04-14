import React from 'react';
import Grid from './grid';
import ButtonLink from './buttonLink';

const BlogPagination = ({ i18n, pagination, noScroll, expanded }) => {
  const { page, pages, years, tags, basePath, firstPage } = pagination;
  let prevPage = page === 2 ? firstPage : `${firstPage}page/${page - 1}/`;
  if (page === 1) {
    prevPage = null;
  }
  const nextPage = page === pages ? null : `${firstPage}page/${page + 1}/`;
  const sortedYears = [...years].reverse();
  return (
    <>
      {expanded && (
        <div className="text-center">
          {pagination.filter && (
            <>
              <ButtonLink text="Clear Filters" to={basePath} noScroll={noScroll} notLocalized />
              <br />
            </>
          )}
          {sortedYears.map(year => (
            <ButtonLink
              text={year}
              to={`${basePath}year/${year}`}
              notLocalized
              noScroll={noScroll}
              className={year === pagination.filter ? 'selected' : ''}
            />
          ))}
          {tags.length ? (
            <>
              <br />
              Tags:
              {tags.map(tag => (
                <ButtonLink
                  text={tag}
                  to={`${basePath}tag/${tag}`}
                  notLocalized
                  noScroll={noScroll}
                  className={tag === pagination.filter ? 'selected' : ''}
                />
              ))}
            </>
          ) : null}
        </div>
      )}
      <br />
      <Grid columns={3}>
        <div>
          {prevPage && (
            <ButtonLink
              to={prevPage}
              notLocalized
              text={i18n.previousPage}
              back
              noScroll={noScroll}
            />
          )}
        </div>
        <div className="text-center">{`Page ${page} of ${pages}`}</div>
        <div className="text-right">
          {nextPage && (
            <ButtonLink to={nextPage} notLocalized text={i18n.nextPage} next noScroll={noScroll} />
          )}
        </div>
      </Grid>
    </>
  );
};

export default BlogPagination;
