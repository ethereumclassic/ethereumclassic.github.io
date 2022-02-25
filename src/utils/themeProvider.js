import React, { createContext, useContext } from "react";
import GlobalStyles from "./globalStyles";
import localStorage from "./localStorage";

const ThemeContext = createContext();

function useTheme() {
  return useContext(ThemeContext) || {};
}

const getInitialTheme = () => {
  const storedPrefs = localStorage.getItem("color-theme");
  if (typeof storedPrefs === "string") {
    return storedPrefs;
  }
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
  const initialTheme = getInitialTheme();
  const [theme, setTheme] = React.useState(initialTheme);

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("color-theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      <GlobalStyles />
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider, useTheme };
