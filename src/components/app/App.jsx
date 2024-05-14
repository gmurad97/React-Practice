import React from "react";
import "./App.css";
import CardSection from "../card/CardSection";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <CardSection />
            </div>
        );
    }
}

export default App;