import React, { useContext } from "react";
import tw from "twin.macro";

import { useTheme } from "../utils/themeProvider";
import Icon from "./icon";

export default function DarkModeSwitcher({ ...props }) {
  const { isDark, setTheme } = useTheme();
  return (
    <Icon
      icon={isDark ? "sun" : "moon"}
      css={[tw`h-5 cursor-pointer text-shade-light hover:text-shade-neutral`]}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      {...props}
    />
  );
}
