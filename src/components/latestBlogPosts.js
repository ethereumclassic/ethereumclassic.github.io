import React from 'react';

import ButtonLink from './buttonLink';
import LatestBlogPostsItem from './latestBlogPostsItem';
import Translate from './translate';

const LatestBlogPosts = ({ articles: { edges } }) => {
  return (
    <div className="latest-blog-posts">
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
          <div className="items">
            {edges.map(edge => (
              <LatestBlogPostsItem data={edge.node} key={edge.node.frontmatter.title} />
            ))}
          </div>
          <ButtonLink to="/blog" text={<Translate text="allBlogPosts" />} icon="angle-right" />
        </>
      )}
    </div>
  );
};

export default LatestBlogPosts;
