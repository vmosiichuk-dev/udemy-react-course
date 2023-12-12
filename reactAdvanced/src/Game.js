function Game({ slug, title, src, wish, play }) {
    let gameClass = "game"

    if (wish) gameClass += " --wish"
    if (play) gameClass += " --play"

    return (
        <li className={gameClass} id={slug}>
            <div className="game__title-container">
                <h2 className="game__title">{title}</h2>
            </div>
            <img className="game__cover-img" src={src} alt={"PS2 game cover for " + title} />
            <div className="game__status-container">
            </div>
            <div className="game-buttons" tabIndex={0} role="toolbar" aria-activedescendant={slug + "--toolbar-wish"} aria-label={"Control options for " + title + ":"} >
                <button type="button" id={slug + "--toolbar-wish"} className="btn-sm btn-wish" data-toggle="wish">
                </button>
                <button type="button" id={slug + "--toolbar-play"} className="btn-sm btn-play" data-toggle="play">
                </button>
                <button type="button" id={slug + "--toolbar-info"} className="btn-sm btn-info" >
                </button>
                <button type="button" id={slug + "--toolbar-delete"} className="btn-sm btn-delete">
                </button>
            </div>
        </li>
    )
}

export default Game