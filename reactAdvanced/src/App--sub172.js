import { useState, useEffect, useCallback, useMemo, useRef } from "react"
import useIGDB from "./services/service"
import GameList from "./GameList"
import { Container } from "react-bootstrap"
import "./App.css"

const countFactorial = (num) => {
    if (num === 0 || num === 1) return 1
    for (let i = num - 1; i >= 1; i--) num *= i
    return num
}

function useInputWithValidation(init) {
    const [value, setValue] = useState(init)

    const onChange = e => {
        setValue(e.target.value)
    }

    const validateInput = () => {
        return value.search(/\d/) >= 0
    }

    return { value, onChange, validateInput }
}

const Slider = (props) => {
    const [slide, setSlide] = useState(0)
    const [autoplay, setAutoplay] = useState(false)

    const text = useInputWithValidation("")
    const textArea = useInputWithValidation("")

    const textColor = text.validateInput() ? "text-danger" : null

    const myRef = useRef(null)

    function changeSlide(i) {
        setSlide(slide => slide + i)
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay)
    }

    const focusMyRef = () => {
        myRef.current.focus()
    }

    const factorial = useMemo(() => {
        return countFactorial(slide)
    }, [slide])

    const style = useMemo(() => ({
        color: slide > 4 ? "red" : "blue"
    }), [slide])

    const getSomeImages = useCallback(() => {
        return [
           /*  "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg", */
            "https://www.planetware.com/photos-large/I/italy-florence-cathedral-of-santa-maria-del-fiore.jpg"
        ]
    }, [])

// --------------------------------------------------------------------

    const [data, setData] = useState([])

    const { loading, error, getToken, getGames } = useIGDB()

    const filterGame = (game) => {
        let genres = [],
            websites = [],
            ageRatings = [],
            screenshots = [],
            companyLabel = "",
            companyName = "",
            rating = "N/A",
            title = "",
            src = ""

        if (game.total_rating) {
            rating = Math.round(game.total_rating)
        } else if (game.rating) {
            rating = Math.round(game.rating)
        } else if (game.aggregated_rating) {
            rating = Math.round(game.aggregated_rating)
        }

        if (game.age_ratings === undefined) {
            ageRatings = []
        } else if (game.age_ratings.length > 0) {
            game.age_ratings.forEach(item => ageRatings.push(item.rating))
        }

        if (game.genres !== undefined) {
            game.genres.forEach((genre, i) => { if (i < 4) genres.push(genre.name) })
        }

        if (game.involved_companies !== undefined) {
            game.involved_companies.forEach(item => {
                if (item.developer) {
                    companyLabel = "Developer"
                    companyName = item.company.name
                }
            })

            if (game.involved_companies.length > 0 && companyLabel !== "Developer") {
                companyLabel = "Publisher"
                companyName = game.involved_companies[0].company.name
            }
        }

        if (game.websites !== undefined) {
            game.websites.forEach(item => {
                delete item.id
                websites.push(item)
            })
        }

        if (game.screenshots !== undefined) {
            const screenshotsSliced = game.screenshots.slice(0, 5)
            screenshotsSliced.forEach(item => screenshots.push("https://images.igdb.com/igdb/image/upload/t_screenshot_big/" + item.image_id + ".jpg"))
        }

        title = game.name

        const gamePrice = {
            prices: { 
                loose: "n/a", 
                cib: "n/a", 
                newg: "n/a" 
            }
        }

        game.cover !== undefined ? src = "https://images.igdb.com/igdb/image/upload/t_cover_big/" + game.cover.image_id + ".jpg" : src = ""

        delete game.total_rating
        delete game.rating
        delete game.aggregated_rating
        delete game.age_ratings
        delete game.genres
        delete game.involved_companies
        delete game.screenshots
        delete game.websites
        delete game.name
        delete game.cover                

        const filters = { wish: false, play: false }
        const gameData = { 
            title: title, 
            rating: rating, 
            ageRatings: ageRatings, 
            genres: genres,
            companyLabel: companyLabel,
            companyName: companyName,
            screenshots: screenshots,
            websites: websites,
            src: src, 
            ...game, 
            wishPriceCategory: "",
            priceCategory: "",
            ...gamePrice.prices
        }

        return Object.assign(filters, gameData)
    }

    const handleWelcomeClick = useCallback(async () => {
        try {
            const ratedGames = [],
                notRatedGames = [],
                body = "fields genres.name, name, total_rating, rating, aggregated_rating, age_ratings.rating, cover.image_id, first_release_date, involved_companies.developer, involved_companies.company.name, screenshots.image_id, slug, summary, websites.category, websites.url; limit 10; where platforms = (8) & genres != (4,10,16,34) & themes = (19,21) & themes != (35,39) & keywords != (5340) & player_perspectives != (4,5) & franchises != (463,824) & id != (3837,2862,6200,5143,2861,210296,43614,11286,5868,43262,43264,20829,1159,43301,253324,85965,172551,91643,43633,43210,49405,132163,136,260797,77219,127959,20640,37045,144966,203260,13901,24096,64108,72157,73012); sort total_rating desc;",
                get = await getToken(),
                games = await getGames(get.access_token, body)

            games.forEach(game => {
                const gameFiltered = filterGame(game)
                if (gameFiltered.rating === "N/A") {
                    notRatedGames.push(gameFiltered)
                } else {
                    ratedGames.push(gameFiltered)
                }
            })

            const allGames = [...ratedGames, ...notRatedGames]

            setData(allGames)
        } catch (error) {
            console.error("Error fetching data from the API:", error)
        }
    }, [getToken, getGames])

    useEffect(() => {
        handleWelcomeClick()
        // eslint-disable-next-line
    }, [])

// --------------------------------------------------------------------

    useEffect(() => {
        document.title = `Slide: ${slide}`
    }, [slide])

    useEffect(() => {
        /* console.log("autoplay") */
    }, [autoplay])

    useEffect(() => {
        /* console.log("style") */
    }, [style])

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <Slide getSomeImages={getSomeImages} />
                <div className="text-center" style={style}>Factorial from counter: { factorial }</div>
                <div className="text-center min-h-48">
					Counter: { slide } 
					<br/> 
					{ autoplay ? "auto" : null }
				</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>
                        -1
                    </button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>
                        +1
                    </button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>
                        Toggle autoplay
                    </button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={focusMyRef}>
                        Set focus on input
                    </button>
                </div>
                <div className="buttons mt-3">
                    <input 
                        value={`${text.value} / ${textArea.value}`} 
                        type="text" 
                        className="me-2" 
                        readOnly 
                        disabled 
                    />
                    <input 
                        value={text.value}
                        onChange={text.onChange} 
                        type="email" 
                        ref={myRef} 
                        className={`me-2 ${textColor}`} 
                        placeholder="name@example.com" 
                    />
                </div>
                <div className="buttons mt-3">
                    <label htmlFor="textArea" className="form-label">Text Area</label>
                    <textarea value={textArea.value} onChange={textArea.onChange} id="textArea" className="form-control" rows="3"></textarea>
                </div>
            </div>
            <button 
                className="btn btn-primary me-2"
                onClick={handleWelcomeClick}>
                Set focus on input
            </button>
            <GameList
                data={data}
            />
            {loading}
            {error}
        </Container>
    )
}

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (<>
        { images.map((url, i) => 
            <img 
            src={url} 
            key={`slide ${i}`} 
            alt={`slide ${i}`}
            className="d-block w-90"  
            />
        )}
    </>)
}

function App() {
	return (
        <div className="flex">
            <Slider/>
        </div>
	)
}

export default App