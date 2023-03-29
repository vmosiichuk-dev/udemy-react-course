import "./app.css";
import Info from "../info/info";
import SearchPanel from "../search-panel/search-panel";
import List from "../list/list";

function App() {
    return (
        <div className="app">
            <Info />
            <div className="list-wrapper">     
                <SearchPanel />
                <List />
            </div>
        </div>
    );
}

export default App;