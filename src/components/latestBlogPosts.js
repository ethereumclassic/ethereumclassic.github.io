import React from 'react';

import ButtonLink from './buttonLink';
import NewsListItem from './newsListItem';
import Translate from './translate';

const LatestBlogPosts = ({ articles: { edges } }) => {
  return (
    <>
      <h2>
        <Translate text="latestArticles" />
      </h2>
      {edges.length === 0 ? (
        <>
          <p>
            <b>
              <Translate text="noPosts" />
            </b>
          </p>
          <ButtonLink
            notLocalized
            to="/blog"
            text={<Translate text="englishPosts" />}
            icon="angle-right"
          />
        </>
      ) : (
        <>
          <div className="blog-container mini">
            {edges.map(({ node: post }) => (
              <NewsListItem
                {...post.frontmatter}
                excerpt={post.excerpt}
                link={post.parent.relativeDirectory}
                key={post.frontmatter.title}
              />
            ))}
          </div>
          <ButtonLink to="/blog" text={<Translate text="allBlogPosts" />} icon="angle-right" />
        </>
      )}
    </>
  );
};

export default LatestBlogPosts;
