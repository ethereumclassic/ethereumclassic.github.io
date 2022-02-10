import localesConfig from "../../configs/locales";
import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";

export default function useLocaleItems() {
  const { locale, basePath, defaultLocale } = useLocalization();

  const { locales } = localesConfig;

  const localeItems = Object.keys(locales).map((key) => ({
    ...locales[key],
    key,
  }));

  const current = { ...locales[locale], key: locale };

  return { localeItems, locales, current, defaultLocale, basePath, locale };
}
