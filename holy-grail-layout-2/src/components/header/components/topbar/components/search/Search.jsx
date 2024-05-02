import "./Search.css";

const Search = () => {
    return (
        <div className="search">
            <input className="search__input" type="text" placeholder="Search form" />
            <button className="search__button" type="button">Search</button>
        </div>
    );
}

export default Search;