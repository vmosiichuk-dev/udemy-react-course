import "./app-add-item.css";

const AppAddItem = () => {
    return (
        <div className="app-add-item">
            <h3>Add a game to the list</h3>
            <form action="" className="add-form">
                <input type="text" 
                    placeholder="Enter game title" />
                <input type="number" 
                    placeholder="Enter game rating" />
                <button type="submit" 
                    className="btn btn-outline">Add</button>
            </form>
        </div>
    );
}

export default AppAddItem;