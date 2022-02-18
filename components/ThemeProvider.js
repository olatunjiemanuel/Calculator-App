import React, { createContext, useState } from "react";

import { Colors } from "../src/utils/Colors";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleSwitch = () => setDarkMode((previousState) => !previousState);

  const theme = {
    colors: darkMode ? Colors.darkTheme : Colors.lightTheme,
    toggleSwitch,
    darkMode,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
