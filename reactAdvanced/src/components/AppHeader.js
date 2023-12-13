import { Link, NavLink } from "react-router-dom"

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">Test portal</Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li>
                        <NavLink 
                            end 
                            to="/"
                            style={({ isActive }) => ({
                                color: isActive ? "#9f0013" : "inherit"
                            })}>Slider
                        </NavLink>
                    </li>
                    /
                    <li>
                        <NavLink 
                            to="/games"
                            style={({ isActive }) => ({
                                color: isActive ? "#9f0013" : "inherit"
                            })}>Games
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader