import React from 'react';

import renderMarkdown from '~components/renderMarkdown';

import SubPageLayout from '~components/subPageLayout';
import Logos from '~components/logos';
import ButtonLink from '~components/buttonLink';

const Roadmap = ({ pageContext: { i18n } }) => {
  return (
    <SubPageLayout i18n={i18n}>
      <ButtonLink
        to="https://github.com/ethereumclassic/Media_Kit#media-kit"
        icon="pencil-alt"
        text={i18n.mediaKit}
      />
      <hr />
      <section>
        {renderMarkdown(i18n.svgsIntro)}
        <Logos />
      </section>
    </SubPageLayout>
  );
};

export default Roadmap;
