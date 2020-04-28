import React from 'react';
import { i18nContext } from 'gatsby-plugin-yaml-i18n';

import { formatDate } from '../utils';

const formats = {
  default: 'YYYY/MM/DD',
  de: 'YYYY.MM.DD'
};

const DateFormatter = ({ children } = {}) => {
  // console.log('data', data);
  const { locale } = React.useContext(i18nContext);
  const dateFormat = formats[locale] || formats.default;
  console.log(dateFormat);
  return formatDate(children, dateFormat);
};

export default DateFormatter;
