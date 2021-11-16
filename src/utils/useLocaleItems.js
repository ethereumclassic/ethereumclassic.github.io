import localesConfig from "../../configs/locales";
import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";

export default function useLocaleItems() {
  const { locale, defaultLocale, basePath } = useLocalization();

  const { list: localeItems, ...locales } = localesConfig;

  const current = localeItems.find(({ key }) => key === locale);

  return { localeItems, locales, current, defaultLocale, basePath, locale };
}
