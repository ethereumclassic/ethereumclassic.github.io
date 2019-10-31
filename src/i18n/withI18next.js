import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import LocaleContext from './localeContext';

import setupI18next from './setupI18next';

const withI18next = () => Comp => {
  class I18nHOC extends Component {
    constructor(props) {
      super(props);

      this.i18n = setupI18next();
      this.changeLanguage();
    }

    componentDidUpdate(prevProps) {
      const {
        pageContext: { locale }
      } = this.props;
      if (locale !== prevProps.pageContext.locale) {
        this.changeLanguage();
      }
    }

    changeLanguage() {
      const { pageContext } = this.props;
      this.addResources(pageContext);
      this.i18n.changeLanguage(pageContext.locale);
    }

    // @see https://www.i18next.com/overview/api#resource-handling
    // `translation` is the default NS we use consistently.
    addResources(pageContext) {
      if (pageContext && pageContext.localeResources && pageContext.localeResources.translation) {
        const {
          locale: lng,
          localeResources: { translation }
        } = pageContext;

        if (!this.i18n.hasResourceBundle(lng, 'translation')) {
          this.i18n.addResourceBundle(lng, 'translation', translation);
        }
      }
    }

    render() {
      const {
        pageContext: { locale, localeMetadata }
      } = this.props;

      return (
        <LocaleContext.Provider value={{ locale, localeMetadata }}>
          <I18nextProvider i18n={this.i18n}>
            <Comp {...this.props} />
          </I18nextProvider>
        </LocaleContext.Provider>
      );
    }
  }

  return I18nHOC;
};

export default withI18next;
