import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    All games
            </button>
            <button 
                className="btn btn-outline"
                type="button">
                    Favourite
            </button>
            <button 
                className="btn btn-outline"
                type="button">
                    Rating above 75
            </button>
        </div>
    );
}

export default AppFilter;