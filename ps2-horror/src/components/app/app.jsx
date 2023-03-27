import FogBg from "./fog-bg/fog-bg";
import AppInfo from "../app-info/app-info";
import AppSearchPanel from "../app-search-panel/app-search-panel";
import AppFilter from "../app-filter/app-filter";
import AppList from "../app-list/app-list";
import AppAddItem from "../app-add-item/app-add-item";

import "./app.css";

function App() {
    return (
        <div className="app">
            <FogBg/>
            <AppInfo/>
            <div className="app-search-panel">
                <AppSearchPanel/>
                <AppFilter/>
            </div>
            <AppList/>
            <AppAddItem/>
        </div>
    );
}

export default App;