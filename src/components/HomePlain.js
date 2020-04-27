import React from 'react';
import Link from './Link';

const HomePlain = ({ data: i18n }) => {
  return (
    <section key={i18n.key} className="wide dark">
      <div>
        {i18n.text}
        {i18n.button && (
          <Link className="button" to={i18n.button.to}>
            {i18n.button.text}
          </Link>
        )}
      </div>
    </section>
  );
};

export default HomePlain;
