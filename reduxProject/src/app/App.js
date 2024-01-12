import List from "../features/deities/List"
import AddForm from "../features/deities/AddForm"
import Filters from "../features/filters/Filters"
import "../styles/app.scss"

const App = () => {
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