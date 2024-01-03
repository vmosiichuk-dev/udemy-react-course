// active class for the selected filter button

import { useDispatch } from "react-redux"
import { filterChange } from "../store/actions"

const Filters = () => {
    const dispatch = useDispatch()

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Filter heroes by their element</p>
                <div className="btn-group">
                    <button className="btn btn-outline-dark active" onClick={() => dispatch(filterChange("all"))}>All</button>
                    <button className="btn btn-danger" onClick={() => dispatch(filterChange("fire"))}>Fire</button>
                    <button className="btn btn-primary" onClick={() => dispatch(filterChange("water"))}>Water</button>
                    <button className="btn btn-warning" onClick={() => dispatch(filterChange("wind"))}>Wind</button>
                    <button className="btn btn-success" onClick={() => dispatch(filterChange("earth"))}>Earth</button>
                </div>
            </div>
        </div>
    )
}

export default Filters