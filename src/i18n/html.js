import React from 'react';
import html, { domToReact } from 'html-react-parser';

import Link from '~components/link';

// replace markdown links with magic links
export default (str = '__???__') => {
  return html(str, {
    // eslint-disable-next-line consistent-return
    replace({ name, attribs, children }) {
      if (name === 'a') {
        return <Link to={attribs.href}>{domToReact(children)}</Link>;
      }
    }
  });
};
