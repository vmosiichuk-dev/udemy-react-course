const ListItem = ({ name, skill, element, activeFilter }) => {
    let bgClass = "",
        filterClass = ""

    switch (element) {
        case "fire": bgClass = "bg-danger"; break
        case "water": bgClass = "bg-primary"; break
        case "wind": bgClass = "bg-warning"; break
        case "earth": bgClass = "bg-success"; break
        default: bgClass = "bg-secondary"
    }

    if (activeFilter !== element && activeFilter !== "all") filterClass = "d-none"

    return (
        <li className={`card flex-row mb-4 shadow-lg text-white ${bgClass} bg-gradient ${filterClass}`}>
            <img src="http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg" 
                 className="img-fluid w-25 d-inline" 
                 alt="unknown hero" 
                 style={{"objectFit": "cover"}}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{skill}</p>
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button type="button" className="btn-close btn-close" aria-label="Close"></button>
            </span>
        </li>
    )
}

export default ListItem