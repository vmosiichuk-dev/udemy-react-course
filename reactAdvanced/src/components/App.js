import { lazy, Suspense, useState, useCallback } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
/* import { MainPage, GamesPage, SingleGamePage, Page404 } from "../pages"*/
import useIGDB from "../services/service"
import AppHeader from "./AppHeader"

const Page404 = lazy(() => import("../pages/404"))
const MainPage = lazy(() => import("../pages/MainPage"))
const GamesPage = lazy(() => import("../pages/GamesPage"))
const SingleGamePage = lazy(() => import("../pages/SingleGamePage"))

function App() {
    const [data, setData] = useState([])
    const { getToken, getGames } = useIGDB()

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

            const { logToConsole, alertUser } = await import("./DynamicImports")
            logToConsole()
            alertUser()
            
        } catch (error) {
            console.error("Error fetching data from the API:", error)
        }
    }, [getToken, getGames])

    import("./DynamicImports")
        .then(object => object.default())
        .catch()

	return (
        <Router>
            <div className="flex">
                <AppHeader />
                <main>
                    <Suspense fallback={<p>Loading...</p>/*<Loader />*/}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/games" element={<GamesPage handleWelcomeClick={handleWelcomeClick} data={data} />} />
                            <Route path="/games/:gameId" element={<SingleGamePage data={data} />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
	)
}

export default App