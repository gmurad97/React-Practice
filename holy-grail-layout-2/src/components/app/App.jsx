import React from "react";
import "./App.css";

import Header from "../header/Header";
import Header from "../main/Main";
import Header from "../footer/Footer";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;