import React, { useContext } from "react";
import tw from "twin.macro";

import { useTheme } from "../utils/themeProvider";
import Icon from "./icon";

export default function DarkModeSwitcher() {
  const { isDark, setTheme } = useTheme();
  return (
    <div
      className="group"
      css={[
        tw`bg-backdrop-light rounded-md inline-flex items-center text-base font-medium hover:text-shade-darkest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-neutral`,
        isDark ? tw`text-shade-darkest` : tw`text-shade-neutral`,
      ]}
    >
      <Icon
        icon={isDark ? "sun" : "moon"}
        css={[
          tw`h-6 w-6 group-hover:text-shade-neutral cursor-pointer`,
          isDark ? tw`text-shade-neutral` : tw`text-shade-light`,
        ]}
        aria-hidden="true"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      />
    </div>
  );
}
