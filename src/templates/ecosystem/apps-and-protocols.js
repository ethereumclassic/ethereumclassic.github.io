import React from 'react';
import LayoutPage from '../../components/LayoutPage';
import ColorGrid from '../../components/ColorGrid';

const AppsTemplate = props => {
  const {
    pageContext: { i18n }
  } = props;
  return (
    <LayoutPage {...props}>
      <ColorGrid data={{ i18n, items: i18n.apps }} />
    </LayoutPage>
  );
};

export default AppsTemplate;
