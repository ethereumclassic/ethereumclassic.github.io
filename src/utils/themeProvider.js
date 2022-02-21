import React, { createContext, useContext } from "react";
import GlobalStyles from "./globalStyles";
import localStorage from "./localStorage";

const ThemeContext = createContext();

function useTheme() {
  const theme = useContext(ThemeContext) || {};
  theme.isDark = theme.theme === "dark";
  return theme;
}

const getInitialTheme = () => {
  const storedPrefs = localStorage.getItem("color-theme");
  if (typeof storedPrefs === "string") {
    return storedPrefs;
  }
  // LODO get this to work
  // set dark mode automatically if user is in dark modde
  if (typeof window !== "undefined") {
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light"; // light is default
};

function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(getInitialTheme);
  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("color-theme", theme);
  };

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
