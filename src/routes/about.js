//  TODO - remove me!
import React from 'react';
import Mdx from '~components/mdx';
import useTranslations from '../i18n/useTranslations';

const About = ({ pageContext: { i18n } }) => {
  return (
    <>
      <h1>About</h1>
      {JSON.stringify(useTranslations())}
      <br />
      <br />
      {JSON.stringify(i18n.json)}
      <br />
      <br />
      <Mdx code={i18n.mdx.testing} />
    </>
  );
};

export default About;
