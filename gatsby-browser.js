import { RedirectsProvider } from "./src/utils/redirectsProvider";
import { ThemeProvider } from "./src/utils/themeProvider";

export function wrapPageElement({ element }) {
  return (
    <ThemeProvider>
      <RedirectsProvider>{element}</RedirectsProvider>
    </ThemeProvider>
  );
}
