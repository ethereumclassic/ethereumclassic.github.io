import React from 'react';
import renderMarkdown from './renderMarkdown';
import LocaleContext from '../i18n/localeContext';
import { formatDate } from '../utils';

const Translate = ({ text, all, date }) => {
  const { globals = {} } = React.useContext(LocaleContext);
  if (date) {
    return formatDate(date, globals.dateFormat);
  }
  if (text) {
    return renderMarkdown(globals[text] || `__${text}__`);
  }
  if (all) {
    return all(globals);
  }
  return null;
};

export default Translate;
