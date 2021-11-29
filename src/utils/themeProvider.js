import React, { createContext, useContext } from "react";
import GlobalStyles from "./globalStyles";

const ThemeContext = createContext();

function useTheme() {
  const theme = useContext(ThemeContext) || {};
  theme.isDark = theme.theme === "dark";
  return theme;
}

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    // Uncomment to automatically change based on user system settings
    // const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    // if (userMedia.matches) {
    //   return "dark";
    // }
  }

  return "light";
};

function ThemeProvider({ initialTheme, children }) {
  const [theme, setTheme] = React.useState(getInitialTheme);
  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalStyles />
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider, useTheme };
