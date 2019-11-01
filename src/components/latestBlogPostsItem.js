import React from 'react';
import { defaultLocale } from '../i18n/config';
import Link from './link';

// TODO replace this localeDateString

const LatestBlogPostsItem = ({ data }) => {
  const { locale } = data.fields;
  const { relativeDirectory: dir } = data.parent;
  const to = locale === defaultLocale ? `/${dir}` : `/${locale}${dir}`;
  return (
    <Link className="item" to={to} notLocalized>
      <h4>
        <span>{`${new Date(data.frontmatter.date).toLocaleDateString()} `}</span>
        {data.frontmatter.author}
      </h4>
      <h4>{data.frontmatter.title}</h4>
      <p>{data.excerpt}</p>
    </Link>
  );
};

export default LatestBlogPostsItem;
