import React from 'react';

import LinkSection from '~components/linkSection';

const MajorProjects = ({ i18n }) => {
  return (
    <>
      <section>
        <h2>{i18n.clients}</h2>
        {i18n.yaml.clients.map(({ key, title, link, text }) => (
          <LinkSection {...{ key, title, text, to: link }} />
        ))}
      </section>
      <section>
        <h2>{i18n.projectsTitle}</h2>
        {i18n.yaml.projects.map(({ key, title, link, text }) => (
          <LinkSection {...{ key, title, text, to: link }} />
        ))}
      </section>
    </>
  );
};

export default MajorProjects;
