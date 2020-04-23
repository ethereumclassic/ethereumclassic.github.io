import React from 'react';

import LayoutWithMenu from './LayoutWithMenu';

const LayoutPage = props => {
  const {
    children,
    pageContext: { i18n }
  } = props;
  return (
    <LayoutWithMenu {...props}>
      <h1>{i18n.title}</h1>
      <p>{i18n.intro}</p>
      {children}
    </LayoutWithMenu>
  );
};

export default LayoutPage;
