// src/context/ThemeContext.tsx
import React, { createContext, useState, type ReactNode } from "react";

type ThemeContextType = {
  darkMode: string | undefined;
  handelseThemeChange: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: "light",
  handelseThemeChange: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<string>(()=>{
    return localStorage.getItem("theme") || "light";
  });
  const handelseThemeChange = () => {
    localStorage.setItem("theme", darkMode === "light" ? "dark" : "light");
     setDarkMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ darkMode, handelseThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
