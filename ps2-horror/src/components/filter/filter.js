import "./filter.css";

function Filter() {
    return (
        <div className="btn-group">
            <button className="btn --active" type="button">All games</button>
            <button className="btn btn-outline" type="button">Favourite</button>
            <button className="btn btn-outline" type="button">Highly rated</button>
        </div>
    );
}

export default Filter;