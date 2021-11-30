import React, { createContext, useContext } from "react";
import GlobalStyles from "./globalStyles";
import localStorage from "./localStorage";

const ThemeContext = createContext();

function useTheme() {
  const theme = useContext(ThemeContext) || {};
  theme.isDark = theme.theme === "dark";
  return theme;
}

// alert("local?");

const getInitialTheme = () => {
  const storedPrefs = localStorage.getItem("color-theme");
  if (typeof storedPrefs === "string") {
    return storedPrefs;
  }
  return "light";
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
