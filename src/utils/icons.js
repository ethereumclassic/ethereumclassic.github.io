// we are dynamically setting icons at various points
// so we must import them all here
import React from "react";

// TODO, move these to individual components for tree shaking + generic pages one

export const etc = ({ color = "currentColor", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.7 220.5" {...props}>
    <title>Ethereum Classic</title>
    <g fill={color}>
      <path d="m2.4 98.8 65-27.4 63 28.1-63.1-99.5zm.2 30.4 64.9 37.6 66.2-37.6-65.6 91.3z" />
      <path d="m67.7 84.8-67.7 28.5 67.7 37.6 65.8-36.8z" />
    </g>
  </svg>
);

// TODO use fontawesome for everything...

// use these primarily; https://heroicons.com/
export {
  MenuIcon as menu,
  SearchIcon as search,
  CodeIcon as code,
  BookOpenIcon as book,
  BriefcaseIcon as briefcase,
  VideoCameraIcon as video,
  ScaleIcon as law,
  UserGroupIcon as users,
  // GlobeIcon as globe,
  CalendarIcon as calendar,
  TagIcon as tag,
  MoonIcon as moon,
  SunIcon as sun,
  ChartSquareBarIcon as chart,
  CursorClickIcon as cursor,
} from "@heroicons/react/solid";

// for brands, if needed; https://simpleicons.org/
export {
  siGithub as github,
  siTwitter as twitter,
  siDiscord as discord,
  siTelegram as telegram,
  siReddit as reddit,
} from "simple-icons/icons";

// use fontawesome for fallback; https://fontawesome.com/v6.0/icons?s=solid,brands
export {
  faCoffee as coffee,
  faCoins as coins,
  faBolt as lightning,
  faAlignRight as contents,
  faFan as fan,
  faNetworkWired as network,
  faGraduationCap as hat,
  faGlobeAmericas as globe,
} from "@fortawesome/free-solid-svg-icons";

// flags, used via locale key; https://github.com/lipis/flag-icons/blob/main/country.json
export { default as en } from "flag-icon-css/flags/1x1/gb.svg";
export { default as de } from "flag-icon-css/flags/1x1/de.svg";
export { default as ja } from "flag-icon-css/flags/1x1/jp.svg";
export { default as zh } from "flag-icon-css/flags/1x1/cn.svg";
export { default as ru } from "flag-icon-css/flags/1x1/ru.svg";
export { default as tr } from "flag-icon-css/flags/1x1/tr.svg";
export { default as ko } from "flag-icon-css/flags/1x1/kr.svg";
export { default as fr } from "flag-icon-css/flags/1x1/fr.svg";
export { default as vi } from "flag-icon-css/flags/1x1/vn.svg";
export { default as th } from "flag-icon-css/flags/1x1/th.svg";
export { default as es } from "flag-icon-css/flags/1x1/es.svg";
export { default as hr } from "flag-icon-css/flags/1x1/hr.svg";
export { default as nl } from "flag-icon-css/flags/1x1/nl.svg";
export { default as sa } from "flag-icon-css/flags/1x1/sa.svg";
export { default as in } from "flag-icon-css/flags/1x1/in.svg";
