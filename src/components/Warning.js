/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */

import React, { useState, useEffect } from 'react';
import Md from './Markdown';
import Link from './Link';

const Warning = ({ i18n }) => {
  if (!i18n.enabled) {
    return null;
  }
  const [showing, setShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowing(true), 1000 * 2);
  }, []);
  return (
    <div className={`${!i18n.type ? 'warning' : i18n.type}-container ${!showing ? 'hidden' : ''}`}>
      <div className={`${!i18n.type ? 'warning' : i18n.type}-overlay dark`}>
        <div className="close-button" onClick={() => setShowing(false)} role="button">
          <i className="fa fa-times" />
        </div>
        <h3>{i18n.title}</h3>
        <div className="action">
          <Link next button to={i18n.button.link} onClick={() => setShowing(false)}>
            {i18n.button.text}
          </Link>
        </div>

        <Md>{i18n.description}</Md>
      </div>
    </div>
  );
};

export default Warning;
