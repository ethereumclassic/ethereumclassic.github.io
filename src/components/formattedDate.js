import React from "react";
import "twin.macro";

import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";

export default function FormattedDate({ date: dateTz, long, ...rest }) {
  const { dayjs } = useLocalization();
  const date = new Date(dateTz).toISOString().slice(0, 10);
  const day = dayjs(date);
  if (!day.isValid()) {
    return <span {...rest}>{date}</span>;
  }
  const formattedDate = day.format(long ? "LL" : "ll");
  return (
    <time dateTime={day.format()} {...rest}>
      {formattedDate}
    </time>
  );
}
