import React from 'react';

import LinkSection from '~components/linkSection';

const MajorProjects = ({ i18n }) => {
  const { projects: p } = i18n.json;
  return (
    <>
      <LinkSection
        title={p.multiGeth}
        text={p.multiGethText}
        to="https://github.com/ethoxy/multi-geth"
      />
      <LinkSection title="Sidechains" to="https://github.com/ETCDEVTeam/sidekick-doc">
        Sidechains will become a native part of ETC infrastructure and protocols. This will increase
        ETC’s scalability and bring blockchain to a diverse group of handheld and IoT devices for
        the first time.
      </LinkSection>

      <LinkSection title="SputnikVM" to="https://github.com/ETCDEVTeam/sputnikvm">
        SputnikVM is a highly efficient and pluggable implementation of the Ethereum Virtual
        Machine. It is a standalone EVM that can operate independently of a blockchain and is
        capable of running on low powered devices; with plans to run on ultra-low power devices.
      </LinkSection>

      <LinkSection title="Emerald Platform" to="https://github.com/ETCDEVTeam/emerald-platform">
        Toolkit to build applications running on Ethereum ETC, contains UI Components, Libraries for
        Javascript and Rust, Icons, Build tools, etc. Targeting various platforms, such as Desktop,
        Mobile, Web and even Shell Scripting.
      </LinkSection>
    </>
  );
};

export default MajorProjects;
