import React from "react";
import "twin.macro";

// TODO import relevant library programitcally, inject into wrapPageElement?
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/en";
dayjs.extend(localizedFormat);

export default function FormattedDate({ date, ...rest }) {
  // chedck if it's actually a date
  const day = dayjs(date);
  if (!day.isValid()) {
    return <span {...rest}>{date}</span>;
  }
  return <time dateTime={day.format()}>{day.locale("en").format("LL")}</time>;
}
