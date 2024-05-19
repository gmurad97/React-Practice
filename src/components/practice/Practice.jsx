import { createContext, useContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

const GlobalContext = createContext([]);

const Practice = () => {
    const [theme, setTheme] = useState("dark");
    return (
        <ThemeProvider>
            <Component />
        </ThemeProvider>
    );
}

const Component = () => {
    return (
        <Component2 />
    );
}

const Component2 = () => {
    return (
        <Component3 />
    );
}

const Component3 = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return (
        <>
            <h1>{theme}</h1>
            <button onClick={() => toggleTheme()}>{theme}</button>
        </>
    );
}

export default Practice;