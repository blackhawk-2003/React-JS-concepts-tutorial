//craete the context

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

//create the global state that recieve component as a children

function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");
  const handleChangeThemeOnButtonClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <GlobalContext.Provider value={{ theme, handleChangeThemeOnButtonClick }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
