import React, { createContext, useState } from "react";

export const ThemContexts = createContext();
const ThemContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    Light: {
      background: "rgb(240,240,240)",
      color: "black",
    },
    Dark: {
      background: "rgb(39,39,39)",
      color: "white",
    },
  });
  //function to switch theme
  const SwitchTheme = () =>{
    setTheme({
        ...theme,
        isLightTheme: !theme.isLightTheme
    })

  }

  const ThemContextData = {
    theme,
    SwitchTheme
  };

  //return Provider
  return (
    <ThemContexts.Provider value={ThemContextData}>
      {children}
    </ThemContexts.Provider>
  );
};

export default ThemContextProvider;
