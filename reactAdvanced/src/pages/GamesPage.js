import { useEffect } from "react"
import GameList from "../components/GameList"

const GamesPage = ({ handleWelcomeClick, data }) => {    
    useEffect(() => {
        handleWelcomeClick()
        // eslint-disable-next-line
    }, [])
   
    return (
        <div className="games">
            <button 
                className="btn btn-games me-2"
                onClick={handleWelcomeClick}>
                Fetch game list
            </button>
            <GameList data={data} />
        </div>   
    )
}

export default GamesPage