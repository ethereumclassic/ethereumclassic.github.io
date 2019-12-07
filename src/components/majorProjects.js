import React from 'react';

import LinkSection from '~components/linkSection';

const MajorProjects = ({ i18n }) => {
  return (
    <>
      <h2>{i18n.title}</h2>
      <LinkSection
        title={i18n.multiGeth}
        text={i18n.multiGethText}
        to="https://github.com/ethoxy/multi-geth"
      />
      <LinkSection
        to="https://github.com/ETCDEVTeam/sidekick-doc"
        title={i18n.sidechains}
        text={i18n.sidechainsText}
      />

      <LinkSection
        to="https://github.com/ETCDEVTeam/sputnikvm"
        title={i18n.sputnikVM}
        text={i18n.sputnikVMText}
      />

      <LinkSection
        to="https://github.com/ETCDEVTeam/emerald-platform"
        title={i18n.emeraldPlatform}
        text={i18n.emeraldPlatformText}
      />
    </>
  );
};

export default MajorProjects;
