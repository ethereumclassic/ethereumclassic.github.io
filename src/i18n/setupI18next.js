import i18n from "i18next";

export default () => {
  i18n.init({
    debug: process.env.NODE_ENV === "development",
    fallbackLng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: { useSuspense: false }
  });

  return i18n;
};
