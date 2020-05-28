import React from 'react';
import Link from './Link';
import Md from './Markdown';

const HomePlain = ({ data: i18n }) => {
  return (
    <section key={i18n.key} className="dark full">
      <div className="container">
        <Md>{i18n.text}</Md>
        {i18n.button && (
          <Link button next to={i18n.button.link}>
            {i18n.button.text}
          </Link>
        )}
      </div>
    </section>
  );
};

export default HomePlain;
