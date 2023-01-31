import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {}
});

const body = document.querySelector('body');

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    console.log('Entrando en toggleTheme()');
    if (theme === 'light') {
      if (body?.classList.contains('container-light')) {
        body?.classList.remove('container-light');
      }
      body?.classList.add('container-dark');
      setTheme('dark');
    } else {
      if (body?.classList.contains('container-dark')) {
        body?.classList.remove('container-dark');
      }
      body?.classList.add('container-light');
      setTheme('light');
    }
  }

  const data = { theme, toggleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
