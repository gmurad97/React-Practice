import React from "react";
import "./App.css";
/* import CardSection from "../card/CardSection"; */
import Practice from "../practice/Practice.jsx";
/* import Crypto from "../crypto/Crypto.jsx"; */

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <Practice />
                {/* <Practice /> */}
                {/* <CardSection /> */}
            </div>
        );
    }
}

export default App;