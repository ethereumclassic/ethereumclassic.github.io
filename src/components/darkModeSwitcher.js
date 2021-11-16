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
        tw`bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
        isDark ? tw`text-gray-900` : tw`text-gray-500`,
      ]}
    >
      <Icon
        icon={isDark ? "sun" : "moon"}
        css={[
          tw`h-6 w-6 group-hover:text-gray-500 cursor-pointer`,
          isDark ? tw`text-gray-600` : tw`text-gray-400`,
        ]}
        aria-hidden="true"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      />
    </div>
  );
}
