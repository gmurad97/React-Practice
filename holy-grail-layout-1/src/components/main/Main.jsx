import "./Main.css";
import Nav from "./components/nav/Nav";
import Article from "./components/article/Article";
import Aside from "./components/aside/Aside";

const Main = () => {
    return (
        <main className="main">
            <Nav />
            <Article />
            <Aside />
        </main>
    );
}

export default Main;