import React from 'react';

import html from '../../i18n/html';

import SubPageLayout from '~components/subPageLayout';
import Logos from '~components/logos';
import ButtonLink from '~components/buttonLink';

const Roadmap = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      {html(i18n.intro)}
      <ButtonLink
        to="https://github.com/ethereumclassic/Media_Kit#media-kit"
        icon="pencil-alt"
        text={i18n.mediaKit}
      />
      {html(i18n.svgsIntro)}
      <Logos />
    </SubPageLayout>
  );
};

export default Roadmap;
