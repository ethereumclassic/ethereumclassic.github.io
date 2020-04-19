import React from 'react';
import ButtonLink from './buttonLink';

const BlogPagination = ({ pagination }) => {
  const { years, basePath } = pagination;
  const sortedYears = [...years].reverse();
  return (
    <div className="merged-buttons float-right">
      {sortedYears.map(year => (
        <ButtonLink
          text={year}
          to={`${basePath}year/${year}`}
          notLocalized
          className={year === pagination.filter ? 'selected' : ''}
          noScroll
        />
      ))}
    </div>
  );
};

export default BlogPagination;
