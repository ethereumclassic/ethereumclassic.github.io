import React from "react";

export const etc = ({ color = "currentColor", ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.7 220.5" {...rest}>
    <g fill={color}>
      <path d="m2.4 98.8 65-27.4 63 28.1-63.1-99.5zm.2 30.4 64.9 37.6 66.2-37.6-65.6 91.3z" />
      <path d="m67.7 84.8-67.7 28.5 67.7 37.6 65.8-36.8z" />
    </g>
  </svg>
);

export const matrix = ({ color = "currentColor", ...rest }) => (
  <svg viewBox="0 0 27.9 32" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <g fill={color}>
      <path d="M27.005 31.205V.705h-2.19v-.732h3.04v32h-3.04v-.732zM8.135 10.405v1.54h.044a4.486 4.486 0 0 1 1.49-1.37c.58-.323 1.25-.485 1.99-.485.72 0 1.38.14 1.97.42.595.279 1.05.771 1.36 1.48.338-.5.796-.941 1.38-1.32.58-.383 1.27-.574 2.06-.574.602 0 1.16.074 1.67.22.514.148.954.383 1.32.707.366.323.653.746.859 1.27.205.522.308 1.15.308 1.89v7.63h-3.13v-6.46c0-.383-.015-.743-.044-1.08a2.302 2.302 0 0 0-.242-.882 1.47 1.47 0 0 0-.584-.596c-.257-.146-.606-.22-1.05-.22-.44 0-.796.085-1.07.253-.272.17-.485.39-.639.662a2.649 2.649 0 0 0-.308.927 7.075 7.075 0 0 0-.078 1.05v6.35h-3.13v-6.4c0-.338-.007-.673-.021-1a2.826 2.826 0 0 0-.188-.916 1.408 1.408 0 0 0-.55-.673c-.258-.168-.636-.253-1.14-.253a2.334 2.334 0 0 0-.584.1 1.95 1.95 0 0 0-.705.374c-.228.184-.422.449-.584.794-.161.346-.242.798-.242 1.36v6.62h-3.13v-11.4zM.841.737v30.5h2.19v.732h-3.04v-32h3.03v.732z" />
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
  faUser as user,
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
  faLandmark as foundation,
  // in timeline and forks
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
  faGasPump as gas,
  faCut as scissors,
  faQuestionCircle as question,
  faQuestion as questionMark,
  faDesktop as screen,
  faComments as comments,
  faEthernet as ethernet,
  faCompass as compass,
  faEye as eye,
  faServer as server,
  faHardHat as hardhat,
  faSwimmingPool as pool,
  faVial as vial,
  faLink as link,
  faLanguage as language,
  faCube as block,
} from "@fortawesome/free-solid-svg-icons";

export {
  faTwitter as twitter,
  faDiscord as discord,
  faTelegram as telegram,
  faReddit as reddit,
  faGithub as github,
  faEthereum as eth,
  faYoutube as youtube,
  faGitter as gitter,
  faWeibo as weibo,
  faSlack as slack,
  faFacebook as facebook,
  faMediumM as medium,
} from "@fortawesome/free-brands-svg-icons";

// flags, used via locale key or flag key; https://github.com/lipis/flag-icons/blob/main/country.json
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
export { default as eg } from "flag-icon-css/flags/1x1/eg.svg";
export { default as in } from "flag-icon-css/flags/1x1/in.svg";
export { default as gr } from "flag-icon-css/flags/1x1/gr.svg";
export { default as my } from "flag-icon-css/flags/1x1/my.svg";
export { default as it } from "flag-icon-css/flags/1x1/it.svg";
