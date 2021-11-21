import React from "react";
import "twin.macro";

// dayjs locales are automatically impoted in translation plugin pageWRapper
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";

dayjs.extend(localizedFormat);

export default function FormattedDate({ date, ...rest }) {
  const { dayJsImport } = useLocalization();
  const day = dayjs(date);
  if (!day.isValid()) {
    return <span {...rest}>{date}</span>;
  }
  const formattedDate = dayJsImport
    ? day.locale(dayJsImport).format("LL")
    : day.format("YYYY.MM.DD");
  return <time dateTime={day.format()}>{formattedDate}</time>;
}
