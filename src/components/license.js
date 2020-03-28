import React from 'react';

import Link from './link';
import Translate from './translate';

const licenses = {
  'CC-BY': 'https://creativecommons.org/licenses/by/2.0/',
  'CC-BY-SA': 'https://creativecommons.org/licenses/by-sa/2.0/',
  MPL2: 'https://www.mozilla.org/en-US/MPL/2.0/',
  CC0: 'https://creativecommons.org/share-your-work/public-domain/cc0/'
};

const License = ({ license }) => {
  if (!license) {
    return null;
  }
  return (
    <div className="license">
      <Translate text="license" />{' '}
      {licenses[license] ? <Link to={licenses[license]} text={license} /> : license}
    </div>
  );
};

export default License;
