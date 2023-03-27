import "./app-list-item.css";
import src from './img/silent-hill-2.jpg' // relative path to image 

const AppListItem = () => {
    return (
        <li className="list-item">
            <img src={src} alt="" />
            <div className="list-item-buttons">
                <i className="icon icon-favourite"></i>
                <button 
                type="button" 
                className="btn-sm btn-fff">
                    <i className="icon icon-played"></i>
                </button>
                <button 
                type="button" 
                className="btn-sm btn-fff">
                    <i className="icon icon-delete"></i>
                </button>
            </div>
            <div className="list-item-data">
                <span className="list-item-label">Silent Hill 2</span>
                <input
                type="text"
                className="list-item-input"
                defaultValue="89" />
            </div>
        </li>
    );
}

export default AppListItem;