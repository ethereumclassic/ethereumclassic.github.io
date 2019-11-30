import React from 'react';

import LocaleContext from './localeContext';

const withTranslations = () => Comp => {
  return props => {
    const {
      pageContext: { locale, globals }
    } = props;
    return (
      <LocaleContext.Provider value={{ locale, globals }}>
        <Comp {...props} />
      </LocaleContext.Provider>
    );
  };
};

export default withTranslations;
