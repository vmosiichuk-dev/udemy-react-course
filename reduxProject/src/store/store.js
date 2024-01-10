import { configureStore } from "@reduxjs/toolkit"
import reducer from "./reducer"

const stringMiddleware = () => (dispatch) => (action) => {
    if (typeof action === "string") {
        return dispatch({ type: action })
    }
    
    return dispatch(action)
}

const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== "production"
})

export default store