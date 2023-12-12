import Game from "./Game"

function GameList({ data }) {
    const renderGames = () => {
        console.log(data)
        
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