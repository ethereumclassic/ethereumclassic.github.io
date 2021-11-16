// TODO somehow make this dynamic?
import React, { forwardRef } from "react";
import * as icons from "../utils/icons";

const IconComp = forwardRef(function (
  {
    icon,
    viewBox = "0 0 24 24",
    color = "currentColor",
    size = 24,
    title = icon.title,
    ...others
  },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox={viewBox}
      ref={ref}
      {...others}
    >
      {title && <title>{title}</title>}
      <path d={icon.path} />
    </svg>
  );
});

export default function Icon({ icon, comp, ...rest }) {
  const I = comp || icons[icon] || icons.menu;
  if (I.icon) {
    return (
      <IconComp
        icon={{ path: I.icon[4] }}
        viewBox={`0 0 ${I.icon[0]} ${I.icon[1]}`}
        {...rest}
      />
    );
  }
  if (I.svg) {
    return <IconComp icon={I} {...rest} />;
  }
  if (typeof I === "string") {
    return <img src={I} alt={rest.alt || ""} {...rest} />;
  }
  const { size: width, ...extra } = rest;
  return <I {...extra} style={width && { width, height: width }} />;
}
