import React from 'react';
import { groupItems } from '../../utils';

import html from '../../i18n/html';

import SubPageLayout from '~components/subPageLayout';
import ButtonGroup from '~components/buttonGroup';

const SocialChannels = ({ pageContext: { i18n } }) => {
  const items = groupItems(i18n.yaml.items);
  return (
    <SubPageLayout i18n={i18n}>
      {html(i18n.intro)}
      <ButtonGroup header={html(i18n.chatIntro)} items={items.chat} />
      <ButtonGroup header={html(i18n.telegramIntro)} items={items.telegram} />
      <ButtonGroup header={html(i18n.forumIntro)} items={items.forum} />
      <ButtonGroup header={html(i18n.mediaIntro)} items={items.media} />
      <ButtonGroup header={html(i18n.repositoryIntro)} items={items.repository} />
      <ButtonGroup header={html(i18n.twitterIntro)} items={items.twitter} />
      <ButtonGroup header={html(i18n.websiteIntro)} items={items.website} />
    </SubPageLayout>
  );
};

export default SocialChannels;
