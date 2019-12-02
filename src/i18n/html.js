import React from 'react';
import html, { domToReact } from 'html-react-parser';

import Link from '~components/link';

// replace markdown links with magic links
export default (str = '__???__') => {
  return html(str, {
    // eslint-disable-next-line consistent-return
    replace(node) {
      if (node.name === 'a') {
        return <Link to={node.attribs.href}>{domToReact(node.children)}</Link>;
      }
    }
  });
};
