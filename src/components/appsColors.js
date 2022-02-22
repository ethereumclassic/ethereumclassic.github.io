import React from "react";
import tw from "twin.macro";

// red, yellow, green, blue, indigo, purple, pink, gray

const red = {
  bg: tw`
    bg-gradient-to-b from-red-50 to-red-100 group-hover:from-red-100 
    dark:from-red-700 dark:to-red-900  dark:group-hover:from-red-900
  `,
  fg: tw`text-red-800 group-hover:text-red-900 dark:text-red-100`,
  icon: tw`bg-gradient-to-bl from-red-600 to-red-900 text-red-400`,
};

const yellow = {
  bg: tw`
    bg-gradient-to-b from-yellow-50 to-yellow-100 group-hover:from-yellow-100 
    dark:from-yellow-700 dark:to-yellow-900  dark:group-hover:from-yellow-900
  `,
  fg: tw`text-yellow-800 group-hover:text-yellow-900 dark:text-yellow-100`,
  icon: tw`bg-gradient-to-bl from-yellow-600 to-yellow-900 text-yellow-400`,
};

const green = {
  bg: tw`
    bg-gradient-to-b from-green-50 to-green-100 group-hover:from-green-100 
    dark:from-green-700 dark:to-green-900  dark:group-hover:from-green-900
  `,
  fg: tw`text-green-800 group-hover:text-green-900 dark:text-green-100`,
  icon: tw`bg-gradient-to-bl from-green-600 to-green-900 text-green-400`,
};

const blue = {
  bg: tw`
    bg-gradient-to-b from-blue-50 to-blue-100 group-hover:from-blue-100 
    dark:from-blue-700 dark:to-blue-900  dark:group-hover:from-blue-900
  `,
  fg: tw`text-blue-800 group-hover:text-blue-900 dark:text-blue-100`,
  icon: tw`bg-gradient-to-bl from-blue-600 to-blue-900 text-blue-400`,
};

const indigo = {
  bg: tw`
    bg-gradient-to-b from-indigo-50 to-indigo-100 group-hover:from-indigo-100 
    dark:from-indigo-700 dark:to-indigo-900  dark:group-hover:from-indigo-900
  `,
  fg: tw`text-indigo-800 group-hover:text-indigo-900 dark:text-indigo-100`,
  icon: tw`bg-gradient-to-bl from-indigo-600 to-indigo-900 text-indigo-400`,
};

const purple = {
  bg: tw`
    bg-gradient-to-b from-purple-50 to-purple-100 group-hover:from-purple-100 
    dark:from-purple-700 dark:to-purple-900  dark:group-hover:from-purple-900
  `,
  fg: tw`text-purple-800 group-hover:text-purple-900 dark:text-purple-100`,
  icon: tw`bg-gradient-to-bl from-purple-600 to-purple-900 text-purple-400`,
};

const pink = {
  bg: tw`
    bg-gradient-to-b from-pink-50 to-pink-100 group-hover:from-pink-100 
    dark:from-pink-700 dark:to-pink-900  dark:group-hover:from-pink-900
  `,
  fg: tw`text-pink-800 group-hover:text-pink-900 dark:text-pink-100`,
  icon: tw`bg-gradient-to-bl from-pink-600 to-pink-900 text-pink-400`,
};

const gray = {
  bg: tw`
    bg-gradient-to-b from-gray-50 to-gray-100 group-hover:from-gray-100 
    dark:from-gray-700 dark:to-gray-900  dark:group-hover:from-gray-900
  `,
  fg: tw`text-gray-800 group-hover:text-gray-900 dark:text-gray-100`,
  icon: tw`bg-gradient-to-bl from-gray-200 to-gray-900 text-gray-100 opacity-30`,
};

export {
  red,
  yellow,
  green,
  blue,
  indigo,
  purple,
  pink,
  gray,
  gray as default,
};
