import React from "react";
import "twin.macro";

import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";

export default function FormattedDate({ date, ...rest }) {
  const { dayJsImport, dayjs } = useLocalization();
  const day = dayjs(date);
  if (!day.isValid()) {
    return <span {...rest}>{date}</span>;
  }
  const formattedDate = day.format(dayJsImport ? "ll" : "YYYY.MM.DD");
  return (
    <time dateTime={day.format()} {...rest}>
      {formattedDate}
    </time>
  );
}
