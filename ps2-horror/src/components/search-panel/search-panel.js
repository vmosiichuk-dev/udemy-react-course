import "./search-panel.css";
import Filter from "../filter/filter";
import search from "./img/search.png";

function SearchPanel() {
    return (
        <div className="search-panel">
            <Filter/>
            <div className="search-wrapper">
                <input type="text" className="search-input" placeholder="Search game by title" />
                <img className="icon-search" alt="" src={search}/>
            </div>
        </div>
    );
}

export default SearchPanel;