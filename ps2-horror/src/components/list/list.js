import "./list.css";
import ListItem from "../list-item/list-item";

function List() {
    return (
        <ul className="list">
            <ListItem/> 
            <ListItem/> 
            <ListItem/>
            <ListItem/> 
            <ListItem/>
            <ListItem/> {/* 6 */}
            <ListItem/> 
            <ListItem/> 
            <ListItem/>
            <ListItem/> 
            <ListItem/>
            <ListItem/> {/* 12 */}
            <ListItem/> 
            <ListItem/>
        </ul>
    );
}

export default List;