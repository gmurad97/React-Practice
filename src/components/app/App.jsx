import Practice from "../practice/Practice.jsx";
import HookPractice from "../hookPractice/HookPractice.jsx";
import Search from "../Search/Search.jsx";
import PortalModal from "../PortalModal.jsx";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import RefPractice from "../refPractice/RefPractice.jsx";
import Hello from "../Hello.jsx";

const App = () => {
    return (
        <div className="app" id="app">
            <Hello />
        </div>
    );
}

export default App;