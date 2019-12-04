import React from 'react';
import html from '../i18n/html';
import LocaleContext from '../i18n/localeContext';

// NOTE: this component only used for fetching global translation strings in `/content/globals.xx.yaml`

const Translate = ({ text, all }) => {
  const { globals = {} } = React.useContext(LocaleContext);
  if (text) {
    return html(globals[text] || `__${text}__`);
  }
  if (all) {
    return all(globals);
  }
  return null;
};

export default Translate;
