import React from 'react';
import Md from './Markdown';

const HomeSplit = ({ data: i18n }) => {
  return (
    <section>
      <header>
        <Md>{i18n.left}</Md>
      </header>
      <div className="content">
        <Md>{i18n.right}</Md>
      </div>
    </section>
  );
};

export default HomeSplit;
