import React, { createContext, useContext } from "react";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

const NavigationContext = createContext();

function useNavigation() {
  return useContext(NavigationContext);
}

function NavigationProvider({ children, pageContext: { basePath } }) {
  const { navItems } = useGlobals();
  // add current, next and prev bools to each item
  const baseFragments = basePath.split("/");
  const levels = [{ navItems }];
  let next, prev;
  baseFragments.forEach((_, i) => {
    if (!levels[i] || !levels[i].navItems) {
      return;
    }
    const items = levels[i].navItems;
    const linkMatch = `/${baseFragments.slice(0, i + 1).join("/")}`;
    const j = items.findIndex(({ link }) => link === linkMatch);
    console.log({ levels, baseFragments, linkMatch, basePath });
    if (j > -1) {
      // set `current ` styling
      items[j].current = true;
      // only calculate on the final fragment
      if (i === baseFragments.length - 1) {
        if (items[j - 1]) {
          // prev sibling last child if there is one
          if (items[j - 1].navItems) {
            prev = items[j - 1].navItems[items[j - 1].navItems.length - 1];
          } else {
            prev = items[j - 1];
          }
          // prev sibling if there is one
        } else if (levels[i]) {
          // parent if there is one
          prev = levels[i];
        }
        if (items[j].navItems) {
          // child layer if there is one
          next = items[j].navItems[0];
        } else if (items[j + 1]) {
          // next sibling if there is one
          next = items[j + 1];
        } else if (levels[i - 1]) {
          // parent's sibling if there is one
          const pI = levels[i - 1].navItems.findIndex(({ current }) => current);
          next = levels[i - 1].navItems[pI + 1];
        }
      }
    }
    levels.push(items[j]);
  });
  const [{ navItems: main }, sub] = levels;
  return (
    <NavigationContext.Provider value={{ main, sub, prev, next }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider, NavigationContext, useNavigation };
