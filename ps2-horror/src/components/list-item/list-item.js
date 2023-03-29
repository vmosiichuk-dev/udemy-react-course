import "./list-item.css";
import src from "./img/haunting-ground.jpg";

let rating = 67,
    name = "Haunting Ground";

function ListItem() {
    return (
        <li className="list-item">
            <img src={src} alt="" />
            <div className="list-item-buttons">
                <button type="button" className="btn-sm btn-fff">
                    <i className="icon icon-favourite"></i>
                </button>
                <button type="button" className="btn-sm btn-fff">
                    <i className="icon icon-played"></i>
                </button>
                <button type="button" className="btn-sm btn-fff">
                    <i className="icon icon-delete"></i>
                </button>
            </div>
            <div className="list-item-data">
                <span className="list-item-name">{name}</span>
                <span className="list-item-rating">{rating}</span>
            </div>
        </li>
    );
}

export default ListItem;