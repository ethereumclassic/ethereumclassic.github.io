import React from 'react';
import LocalizedLink from './localizedLink';

const NavigationButton = ({ to, text }) => {
  return (
    <LocalizedLink className="button-link" aria-label={text} to={to}>
      {text}
    </LocalizedLink>
  );
};

export default NavigationButton;
