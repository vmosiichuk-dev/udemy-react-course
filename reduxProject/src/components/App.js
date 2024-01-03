import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { error, fetching, fetchedHeroes, fetchedFilters } from "../store/actions"
import { useHttp } from "../hooks/http.hook"

import List from "./List"
import AddForm from "./AddForm"
import Filters from "./Filters"
import "../styles/app.scss"

const App = () => {
    const dispatch = useDispatch()
    const { request } = useHttp()

    useEffect(() => {
        dispatch(fetching())
        request("http://localhost:3001/filters")
            .then(data => dispatch(fetchedFilters(data)) )
            .catch(() => dispatch(error()) )
        
        dispatch(fetching())
        request("http://localhost:3001/heroes")
            .then(data => dispatch(fetchedHeroes(data)) )
            .catch(() => dispatch(error()) )

        // eslint-disable-next-line
    }, [])

    return (
        <main className="app">
            <div className="content">
                <List/>
                <div className="content__interactive">
                    <AddForm/>
                    <Filters/>
                </div>
            </div>
        </main>
    )
}

export default App