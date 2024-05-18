import React from "react";
import "./App.css";
import CardSection from "../card/CardSection";
import Practice from "../practice/Practice.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <Practice />
                {/* <CardSection /> */}
            </div>
        );
    }
}

export default App;