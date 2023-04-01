import "./list.css";
import ListItem from "../list-item/list-item";

function List({data}) {

    const elements = data.map(item => {
        return (
            <ListItem key={item.id} src={`./img/${item.id}.jpg`} {...item} />
        );
    });

    return (
        <ul className="list">
            {elements}
        </ul>
    );
}

export default List;