import React from 'react';
import EducationMenu from '~components/educationMenu';
import Mdx from '~components/mdx';

const Education = ({ pageContext: { i18n } }) => {
  return (
    <>
      <Mdx code={i18n.mdx.education} />
      <EducationMenu />
    </>
  );
};

export default Education;
