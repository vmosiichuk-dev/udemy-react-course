import { useParams, Link } from "react-router-dom"
import { useState, useEffect, useCallback } from "react"

const View = ({ game }) => {
    const { title, src, rating, genres, summary, companyLabel, companyName } = game

    return (
        <div className="single-game">
            <img src={src} alt={title} />
            <div>
                <h2>{title}</h2>
                <p>{summary}</p>
                <p>{rating}</p>
                <p>{companyLabel}: {companyName}</p>
                <div>{genres}</div>
            </div>
            <Link to="/games">Back to all games</Link>
        </div>
    )
}

function SingleGamePage({ data }) {
    const { gameId } = useParams()
    const [loading, setLoading] = useState(true)
    const [game, setGame] = useState(null)

    const updateGame = useCallback(() => {
        const newGame = data.find(item => item.slug === gameId)
        setGame(newGame)
        setLoading(false)
    }, [data, gameId])

    useEffect(() => {
        updateGame()
    }, [updateGame])

    const error = game === null ? <p>Oops... An error occurred.</p> : null
    const loader = loading ? <p>Loading...</p> : null
    const content = !(loading || error || !game) ? <View game={game}/> : null

    return (
        <>
            {error}
            {loader}
            {content}
        </>
    )
}

export default SingleGamePage