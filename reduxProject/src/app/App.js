import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchData } from "../reducer/actions"
import { useHttp } from "../hooks/useHttp"

import List from "../features/deities/List"
import AddForm from "../features/deities/AddForm"
import Filters from "../features/filters/Filters"
import "../styles/app.scss"

const App = () => {
    const dispatch = useDispatch()
    const { request } = useHttp()

    useEffect(() => {
        dispatch(fetchData(request))
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