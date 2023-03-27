import "./app-list.css";
import AppListItem from "../app-list-item/app-list-item";

const AppList = () => {
    return (
        <ul className="app-list">
            <AppListItem/>
            <AppListItem/>
            <AppListItem/>
        </ul>
    );
}

export default AppList;