import { useEffect, useMemo } from "react"
import GameList from "../components/GameList"
import setContent from "../utils/SetContent"

const GamesPage = ({ handleWelcomeClick, data, process }) => {   
     
    useEffect(() => {
        handleWelcomeClick()
        // eslint-disable-next-line
    }, [])

    const elements = useMemo(() => {
        return setContent(process)
    }, [process])
   
    return (
        <div className="games">
            <button 
                className="btn btn-games me-2"
                onClick={handleWelcomeClick}>
                Fetch game list
            </button>
            {elements}
            <GameList data={data} />
        </div>   
    )
}

export default GamesPage