import { useContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext";

const Practice = () => {
    return (
        <ThemeProvider>
            <div className="practice">
                <Component />
            </div>
        </ThemeProvider>
    );
}

const Component = () => {
    return (
        <div className="component">
            <Component2 />
        </div>
    );
}

const Component2 = () => {
    return (
        <div className="component2">
            <Component3 />
        </div>
    );
}

const Component3 = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    return (
        <div className="component3">
            <h1>{theme}</h1>
            <button onClick={() => theme === "Dark mode" ? setTheme("Light mode") : setTheme("Dark mode")}>Change</button>
        </div>
    );
}

export default Practice;