import React from 'react';
import Link from './Link';

const licenses = {
  'CC-BY': 'https://creativecommons.org/licenses/by/2.0/',
  'CC-BY-SA': 'https://creativecommons.org/licenses/by-sa/2.0/',
  MPL2: 'https://www.mozilla.org/en-US/MPL/2.0/',
  CC0: 'https://creativecommons.org/share-your-work/public-domain/cc0/'
};

const LicenseTip = ({ i18n }) => {
  if (!i18n.license) {
    return null;
  }
  return (
    <div className="tip">
      {i18n.globals.ui.license}
      {'  '}
      {licenses[i18n.license] ? (
        <Link to={licenses[i18n.license]}>{i18n.license}</Link>
      ) : (
        i18n.license
      )}
    </div>
  );
};

export default LicenseTip;
