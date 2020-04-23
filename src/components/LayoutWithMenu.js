import React from 'react';

import LayoutGlobal from './LayoutGlobal';
import MainMenu from './MainMenu';
import Json from './Json';
import SectionMenu from './SectionMenu';

const LayoutWithMenu = props => {
  const {
    children,
    data,
    pageContext,
    pageContext: { i18n }
  } = props;
  return (
    <LayoutGlobal {...props}>
      <SectionMenu i18n={i18n} />
      <MainMenu i18n={i18n} />
      <hr />
      {children}
      <hr />
      <Json pageContext={{ data, pageContext }} />
    </LayoutGlobal>
  );
};

export default LayoutWithMenu;
