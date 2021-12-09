import React from "react";

// TODO, move these to individual components for tree shaking + generic pages one

export const etc = ({ color = "currentColor", ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.7 220.5" {...rest}>
    <g fill={color}>
      <path d="m2.4 98.8 65-27.4 63 28.1-63.1-99.5zm.2 30.4 64.9 37.6 66.2-37.6-65.6 91.3z" />
      <path d="m67.7 84.8-67.7 28.5 67.7 37.6 65.8-36.8z" />
    </g>
  </svg>
);

// https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=github&s=brands,solid&m=free
export {
  faCoffee as coffee,
  faCoins as coins,
  faBolt as lightning,
  faAlignRight as contents,
  faFan as fan,
  faNetworkWired as network,
  faGraduationCap as hat,
  faGlobeAmericas as globe,
  faBars as menu,
  faSearch as search,
  faCode as code,
  faBook as book,
  faBriefcase as briefcase,
  faVideo as video,
  faBalanceScale as law,
  faUsers as users,
  faCalendar as calendar,
  faTag as tag,
  faMoon as moon,
  faSun as sun,
  faChartLine as chart,
  faMousePointer as cursor,
  faCheck as check,
  faAngleDoubleLeft as leftDouble,
  faAngleDoubleRight as rightDouble,
  faAngleDoubleDown as upDouble,
  faAngleDoubleUp as downDouble,
  faAngleLeft as left,
  faAngleRight as right,
  faAngleDown as down,
  faAngleUp as up,
  faTimes as times,
  faPlusCircle as plus,
  faExternalLinkAlt as external,
  faRss as feed,
  faHandsHelping as contribute,
  faNewspaper as news,
  faSitemap as sitemap,
  faComment as blog,
  faIcons as icons,
  faPen as pen,
  faHistory as update,
  faWrench as wrench,
  faPlayCircle as play,
  faStar as star,
  faImages as images,
  faIdCard as identity,
  faGamepad as game,
  faSync as exchange,
  faChartLine as finance,
  faAward as award,
  faCircleNotch as spinner,
  faSadCry as sad,
  // in timeline
  faRocket as rocket,
  faSnowflake as snowflake,
  faHome as home,
  faFileCode as fileCode,
  faBullhorn as bullhorn,
  faKeyboard as keyboard,
  faCrosshairs as crosshairs,
  faFunnelDollar as funnelDollar,
  faBug as bug,
  faThumbsUp as thumbsUp,
  faTimesCircle as timesCircle,
  faChartArea as chartArea,
  faHourglassStart as hourglassStart,
  faUserSecret as userSecret,
  faExclamationTriangle as exclamationTriangle,
  faCodeBranch as codeBranch,
  faCocktail as cocktail,
  faChartLine as chartLine,
  faFrown as frown,
  faCubes as cubes,
  faDumpsterFire as dumpsterFire,
  faFlag as flag,
  faAngleDoubleUp as angleDoubleUp,
  faHandHoldingUsd as handHoldingUsd,
  faUserNinja as userNinja,
  faBomb as bomb,
  faUserTie as userTie,
  faUnlink as unlink,
  faSortAmountDown as sortUp,
  faSortAmountDownAlt as sortDown,
  faExclamationCircle as warning,
} from "@fortawesome/free-solid-svg-icons";

export {
  faTwitter as twitter,
  faDiscord as discord,
  faTelegram as telegram,
  faReddit as reddit,
  faGithub as github,
} from "@fortawesome/free-brands-svg-icons";

// TODO use preprocessed flags isntead
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
