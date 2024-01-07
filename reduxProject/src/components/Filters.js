import { useRef } from "react"
import { useDispatch } from "react-redux"
import { filterChange } from "../store/actions"

const Filters = () => {
    const filterContainerRef = useRef(null)
    const dispatch = useDispatch()

    const handleFilterClick = (e, payload) => {
        const btns = filterContainerRef.current.querySelectorAll(".btn")

        btns.forEach(btn => btn.classList.remove("active"))

        e.target.classList.add("active")

        dispatch(filterChange(payload))
    }

    return (
        <div className="card shadow-lg mt-4 rounded-3 bg-card">
            <div className="card-body rounded-3 bg-glass">
                <p className="card-text fs-4">Filter deities by their element</p>
                <div className="btn-group bg-glass" ref={filterContainerRef}>
                    <button className="btn btn-outline-dark" onClick={(e) => handleFilterClick(e, "all")}>All</button>
                    <button className="btn btn-danger" onClick={(e) => handleFilterClick(e, "fire")}>Fire</button>
                    <button className="btn btn-primary" onClick={(e) => handleFilterClick(e, "water")}>Water</button>
                    <button className="btn btn-warning" onClick={(e) => handleFilterClick(e, "wind")}>Wind</button>
                    <button className="btn btn-success" onClick={(e) => handleFilterClick(e, "earth")}>Earth</button>
                </div>
            </div>
        </div>
    )
}

export default Filters