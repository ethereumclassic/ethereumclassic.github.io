// TODO refactor this just use the plugin?
// Move plugin to a separate repo?

// import localesConfig from "../../configs/locales";
import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";

export default function useLocaleItems() {
  return useLocalization();

  // const { locales, enabled } = localesConfig;

  // const localeItems = Object.keys(locales).map((key) => ({
  //   ...locales[key],
  //   key,
  // }));

  // const current = { ...locales[locale], key: locale };

  // return {
  //   localeItems,
  //   locales,
  //   current,
  //   defaultLocale,
  //   basePath,
  //   locale,
  //   enabled,
  //   rtl,
  // };
}
