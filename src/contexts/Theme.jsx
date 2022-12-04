import { useState } from "react";
import { createContext } from "react";

const Theme = createContext({});

const ThemeProvider = ({children}) => {

const [themeColor, setThemeColor] = useState ("ligth");


  return (
    <Theme.Provider value = {{}}>
        {children}
    </Theme.Provider>
  )
}

export default ThemeProvider