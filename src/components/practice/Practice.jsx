import { createContext, useContext, useState, useRef } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

const GlobalContext = createContext([]);


const Practice = () => {
    //input element in useref

    //if you need to change a static element, then use useref
    //otherwise, if we change, add, or delete data from an object, for example (dynamic content) then we use useState
    const inpRef = useRef(null);


    const onButtonClick = () => {
        //change state but without render component
        inpRef.current.focus();
        console.log(inpRef.current.value);
    };

    return (
        <>
            <input ref={inpRef} type="text" />
            <button type="button" onClick={() => onButtonClick()}>ButtonRef</button>
        </>
    );
}

const PracticeContext = () => {
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