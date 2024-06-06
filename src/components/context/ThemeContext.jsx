import { useState, createContext } from "react";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("Dark mode");

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };