import React from 'react';
import LayoutPage from '../../components/LayoutPage';
import Logos from '../../components/Logos';
import Link from '../../components/Link';
import Md from '../../components/Markdown';

const MediaKitTemplate = props => {
  const {
    pageContext: { i18n }
  } = props;
  return (
    <LayoutPage {...props}>
      <Link button to={i18n.button.link} icon="pencil-alt">
        {i18n.button.name}
      </Link>
      <Md>{i18n.svgsIntro}</Md>
      <Logos />
    </LayoutPage>
  );
};

export default MediaKitTemplate;
