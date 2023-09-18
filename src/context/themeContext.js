import { createContext, useState } from "react";

import dayColor from "../components/assets/Day-Background.jpg"
import nightColor from "../components/assets/Night-Background.jpg"

export const themes = {
    light: {
        id:"light",
        backgroundImage: dayColor,
    },
    dark: {
        id:"dark",
        backgroundImage: nightColor,
    }
}

export const ThemeContext = createContext()

export const BackgroundProvider = ( props ) => {

    const [ theme, setTheme ] = useState (themes.light)

    const toggleTheme = () => {
        setTheme((curr) => curr === themes.light ? themes.dark : themes.light)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    
    )
}
