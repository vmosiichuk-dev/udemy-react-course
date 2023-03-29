import "./add-item.css";

function AddItem() {
    return (
        <div className="add-item">
            <h3>Add a game to the list</h3>
            <form action="" className="add-form">
                <input type="text" placeholder="Enter game title" />
                <input type="number" placeholder="Enter rating" />
                <button type="submit" className="btn btn-outline">Add</button>
            </form>
        </div>
    );
}

export default AddItem;