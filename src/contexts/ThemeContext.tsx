import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    console.log('Hello')
    setTheme(theme === "light" ? "dark" : "light");
  }

  const data = { theme, toggleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
