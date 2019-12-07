import React from 'react';
import html from '../i18n/html';
import LocaleContext from '../i18n/localeContext';

function pad(num, width, z = '0') {
  const n = `${num}`;
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function formatDate(date, fmt) {
  const dt = new Date(date);
  let format = fmt;
  format = format.replace('ss', pad(dt.getSeconds(), 2));
  format = format.replace('s', dt.getSeconds());
  format = format.replace('DD', pad(dt.getDate(), 2));
  format = format.replace('D', dt.getDate());
  format = format.replace('mm', pad(dt.getMinutes(), 2));
  format = format.replace('m', dt.getMinutes());
  format = format.replace('MM', pad(dt.getMonth() + 1, 2));
  format = format.replace(/M(?![ao])/, dt.getMonth() + 1);
  format = format.replace('yyyy', dt.getFullYear());
  format = format.replace('YYYY', dt.getFullYear());
  format = format.replace('yy', `${dt.getFullYear()}`.substring(2));
  format = format.replace('YY', `${dt.getFullYear()}`.substring(2));
  format = format.replace('HH', pad(dt.getHours(), 2));
  format = format.replace('H', dt.getHours());
  return format;
}

const Translate = ({ text, all, date }) => {
  const { globals = {} } = React.useContext(LocaleContext);
  if (date) {
    return formatDate(date, globals.dateFormat);
  }
  if (text) {
    return html(globals[text] || `__${text}__`);
  }
  if (all) {
    return all(globals);
  }
  return null;
};

export default Translate;
