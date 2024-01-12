import { configureStore } from "@reduxjs/toolkit"
import deities from "../features/deities/deitiesSlice"
import filters from "../features/filters/filtersSlice"

const stringMiddleware = () => (dispatch) => (action) => {
    if (typeof action === "string") {
        return dispatch({ type: action })
    }
    
    return dispatch(action)
}

const store = configureStore({
    reducer: { deities, filters },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== "production"
})

export default store