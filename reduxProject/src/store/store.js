import { createStore, compose, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import reducer from "./reducer"

const stringMiddleware = () => (dispatch) => (action) => {
    if (typeof action === "string") {
        return dispatch({
            type: action
        })
    }

    return dispatch(action)
}

const store = createStore(
    reducer, 
    compose(
        applyMiddleware(thunk, stringMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store

/* 
const enhancer = (createStore) => (...args) => {
    const store = createStore(...args)
    const originalDispatch = store.dispatch

    store.dispatch = (action) => {
        if (typeof action === "string") {
            return originalDispatch({
                type: action
            })
        }

        return originalDispatch(action)
    }

    return store
}
 */