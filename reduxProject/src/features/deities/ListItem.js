import placeholder from "../../assets/placeholder.jpg"
import aphrodite from "../../assets/aphrodite.webp"
import ouranus from "../../assets/ouranus.webp"
import helios from "../../assets/helios.webp"
import poseidon from "../../assets/poseidon.webp"
import hades from "../../assets/hades.webp"
import nyx from "../../assets/nyx.webp"
import selene from "../../assets/selene.webp"
import theia from "../../assets/theia.webp"

const ListItem = ({ id, name, domain, element, handleDelete }) => {
    let src, bgClass = ""

    switch (element) {
        case "fire": bgClass = "bg-danger"; break
        case "water": bgClass = "bg-primary"; break
        case "wind": bgClass = "bg-warning"; break
        case "earth": bgClass = "bg-success"; break
        default: bgClass = "bg-secondary"
    }

    switch (name) {
        case "Aphrodite": src = aphrodite; break
        case "Ouranus": src = ouranus; break
        case "Helios": src = helios; break
        case "Poseidon": src = poseidon; break
        case "Hades": src = hades; break
        case "Nyx": src = nyx; break
        case "Selene": src = selene; break
        case "Theia": src = theia; break
        default: src = placeholder
    }

    return (
        <li data-deity-id={id} className={`card flex-row mb-4 shadow-lg ${bgClass} bg-gradient bg-opacity`}>
            <img src={src}
                 className="img-fluid w-25 d-inline min-w-140" 
                 alt="deity avatar" 
                 style={{"objectFit": "cover"}}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{domain}</p>
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button type="button" className="btn-close btn-close" aria-label="Close" onClick={() => handleDelete(id)}></button>
            </span>
        </li>
    )
}

export default ListItem