import "./search-panel.css";
import Filter from "../filter/filter";

function SearchPanel() {
    return (
        <div class="search-panel">
            <Filter/>
            <div class="search-wrapper">
                <input type="text" class="search-input" placeholder="Search game by title" />
                <i class="icon icon-search"></i>
            </div>
        </div>
    );
}

export default SearchPanel;