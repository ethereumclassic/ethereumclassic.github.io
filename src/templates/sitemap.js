import React from 'react';
import { graphql } from 'gatsby';

import LayoutPage from '../components/LayoutPage';
import Json from '../components/Json';
import Link from '../components/Link';

const Sitemap = props => {
  const {
    pageContext: { i18n },
    data: {
      allSitePage: { edges }
    }
  } = props;
  const blogs = [];
  const rest = [];
  edges.forEach(({ node: { path, context } }) => {
    if (path === '/') {
      return;
    }
    if (['/year/', '/tag/', '/page/'].find(m => path.includes(m))) {
      return;
    }
    const item = {
      link: path,
      name: context.i18n.title,
      description: context.i18n.description
    };
    if (path.startsWith('/blog') || path.startsWith('/news')) {
      blogs.push(item);
    } else {
      rest.push(item);
    }
  });
  const sorted = [...rest, ...blogs];

  return (
    <LayoutPage {...props} noIntro>
      <Link button to={'/rss.xml'} icon="code" className="float-right">
        {i18n.xml}
      </Link>
      <h1>{i18n.title}</h1>
      <p>{i18n.intro}</p>
      <div className="cells slim">
        {sorted.map(i => (
          <div className="cell" key={i.link}>
            <h4 className="title">
              <Link to={i.link}>
                {i.name}
                {'  '}
                <small>{i.link}</small>
              </Link>
            </h4>
            {i.description && <div className="text">{i.description}</div>}
          </div>
        ))}
      </div>
    </LayoutPage>
  );
};

export default Sitemap;

export const query = graphql`
  query Sitemap($locale: String!) {
    allSitePage(
      filter: { context: { locale: { eq: $locale } } }
      sort: { fields: path, order: ASC }
    ) {
      edges {
        node {
          context {
            i18n {
              title
              description
            }
          }
          path
        }
      }
    }
  }
`;
