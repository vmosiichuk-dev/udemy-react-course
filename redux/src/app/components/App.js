import { createStore } from "redux"

const initialState = 0

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC": return state + 1
        default: return state
    }
}

const store = createStore(reducer)

console.log(store.getState())

function App() {
    return (
        <div className="app">
            
        </div>
    )
}

export default App


/* 
let state = reducer(initialState, {type: "INC"})
state = reducer(state, {type: "INC"})
state = reducer(state, {type: "INC"})
state = reducer(state, {type: "INC"})
 */