import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchData } from "../store/actions"
import { useHttp } from "../hooks/http.hook"

import List from "./List"
import AddForm from "./AddForm"
import Filters from "./Filters"
import "../styles/app.scss"

const App = () => {
    const dispatch = useDispatch()
    const { request } = useHttp()

    useEffect(() => {
        dispatch(fetchData(request, ["deities", "filters"]))
    }, [dispatch, request])

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