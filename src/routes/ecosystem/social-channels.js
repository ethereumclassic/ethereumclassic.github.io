import React from 'react';
import { groupItems } from '../../utils';

import SubPageLayout from '~components/subPageLayout';
import ButtonGroup from '~components/buttonGroup';

const SocialChannels = ({ pageContext: { i18n } }) => {
  const items = groupItems(i18n.yaml.items);
  return (
    <SubPageLayout i18n={i18n}>
      <ButtonGroup header={i18n.chatIntro} items={items.chat} />
      <ButtonGroup header={i18n.developmentIntro} items={items.development} />
      <ButtonGroup header={i18n.telegramIntro} items={items.telegram} />
      <ButtonGroup header={i18n.forumIntro} items={items.forum} />
      <ButtonGroup header={i18n.mediaIntro} items={items.media} />
      <ButtonGroup header={i18n.repositoryIntro} items={items.repository} />
      <ButtonGroup header={i18n.twitterIntro} items={items.twitter} />
      <ButtonGroup header={i18n.websiteIntro} items={items.website} />
      <ButtonGroup header={i18n.regionalWebsiteIntro} items={items.regionalWebsite} />
    </SubPageLayout>
  );
};

export default SocialChannels;
