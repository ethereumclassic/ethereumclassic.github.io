import { RedirectsProvider } from "./src/utils/redirectsProvider";
import scrollToElement from "./src/utils/scrollToElement";
import { ThemeProvider } from "./src/utils/themeProvider";

export function wrapPageElement({ element }) {
  return (
    <ThemeProvider>
      <RedirectsProvider>{element}</RedirectsProvider>
    </ThemeProvider>
  );
}

//gatsby-brower.js

export function shouldUpdateScroll({ routerProps: { location } }) {
  if (location.state.scrollTo) {
    window.history.scrollRestoration = "manual";
    window.setTimeout(() => {
      scrollToElement(location.state.scrollTo, 130, "instant");
    }, 1);
    return false;
  }
}
