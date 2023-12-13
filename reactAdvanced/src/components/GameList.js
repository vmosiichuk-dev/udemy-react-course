import { Link } from "react-router-dom"

const Game = ({ slug, title, src }) => {
    return (
        <li className="game" id={slug}>
            <div className="game__title-container">
                <h2 className="game__title">{title}</h2>
            </div>
            <img className="game__cover-img" src={src} alt={"PS2 game cover for " + title} />
            <Link to={`/games/${slug}`} style={{"color": "blue", "textDecoration": "none"}}>🚀 Game details</Link>
        </li>
    )
}

function GameList({ data }) {
    const renderGames = () => {        
        return data.map(item => {    
            return (
                <Game {...item} key={item.slug} />
            )
        })
    }

    const games = renderGames()

    return (
        <ul className="game-list">
            {games}
        </ul>
    )
}

export default GameList