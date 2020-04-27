import React from 'react';
import Link from './Link';

const HomeStayCurrent = ({ data: i18n }) => {
  return (
    <section>
      <header>
        {i18n.text}
        <br />
        {i18n.button && (
          <Link to={i18n.button.to} className="button">
            {i18n.button.text}
          </Link>
        )}
      </header>
      <div className="content">Lates Articles</div>
    </section>
  );
};

export default HomeStayCurrent;
