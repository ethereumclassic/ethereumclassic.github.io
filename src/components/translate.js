import React from 'react';
import html from '../i18n/html';
import LocaleContext from '../i18n/localeContext';

// NOTE: this is only used for global translation strings in `/content/globals.xx.yaml`

const Translate = ({ text, many }) => {
  const { globals } = React.useContext(LocaleContext);
  if (text) {
    return html(globals[text]);
  }
  if (many) {
    return many(globals);
  }
  return null;
};

export default Translate;
