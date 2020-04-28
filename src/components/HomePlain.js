import React from 'react';
import Link from './Link';
import Md from './Markdown';

const HomePlain = ({ data: i18n }) => {
  return (
    <section key={i18n.key} className="wide dark">
      <div>
        <Md>{i18n.text}</Md>
        {i18n.button && (
          <Link button to={i18n.button.to}>
            {i18n.button.text}
          </Link>
        )}
      </div>
    </section>
  );
};

export default HomePlain;
