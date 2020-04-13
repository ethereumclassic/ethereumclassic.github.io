import React from 'react';
import Grid from './grid';
import ButtonLink from './buttonLink';

const BlogPagination = ({ i18n, pagination }) => {
  const { page, pages, itemsPerPage, total, basePath } = pagination;
  let prevPage = page === 2 ? basePath : `${basePath}page/${page - 1}/`;
  if (page === 1) {
    prevPage = null;
  }
  const nextPage = page === pages ? null : `${basePath}page/${page + 1}/`;
  return (
    <Grid columns={3}>
      <div>
        {prevPage && <ButtonLink to={prevPage} notLocalized text={i18n.previousPage} back />}
      </div>
      <div className="text-center">{`Page ${page} of ${pages}`}</div>
      <div className="text-right">
        {nextPage && <ButtonLink to={nextPage} notLocalized text={i18n.nextPage} next />}
      </div>
    </Grid>
  );
};

export default BlogPagination;
