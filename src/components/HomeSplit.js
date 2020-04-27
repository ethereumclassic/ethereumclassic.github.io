import React from 'react';

const HomeSplit = ({ data: i18n }) => {
  return (
    <section>
      <header>{i18n.left}</header>
      <div className="content">{i18n.right}</div>
    </section>
  );
};

export default HomeSplit;
