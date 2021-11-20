// TODO somehow make this dynamic?
import React, { forwardRef } from "react";
import * as icons from "../utils/icons";

const IconComp = forwardRef(function (
  { path, color = "currentColor", ...rest },
  ref
) {
  return (
    <svg ref={ref} fill={color} {...rest}>
      <path d={path} />
    </svg>
  );
});

export default function Icon({ icon, ...rest }) {
  const I = icons[icon] || icons.menu; // TODO fallback to something else

  // Imported SVGs
  if (typeof I === "string") {
    return <img src={I} alt={rest.alt || ""} {...rest} />;
  }
  // For js icons, extract path so we override color
  if (I.icon) {
    return (
      <IconComp
        path={I.icon[4]}
        viewBox={`0 0 ${I.icon[0]} ${I.icon[1]}`}
        aria-hidden="true"
        {...rest}
      />
    );
  }
  // React Icon, like ETC logo
  return <I aria-hidden="true" {...rest} />;
}
