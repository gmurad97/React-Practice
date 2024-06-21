import Practice from "../practice/Practice.jsx";
import HookPractice from "../hookPractice/HookPractice.jsx";
import Search from "../Search/Search.jsx";
import PortalModal from "../PortalModal.jsx";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

const App = () => {
    return (
        <div className="app" id="app">
            <Search />
        </div>
    );
}

export default App;