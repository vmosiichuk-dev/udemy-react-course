import { configureStore } from "@reduxjs/toolkit"
import deities from "../features/deities/deitiesSlice"
import filters from "../features/filters/filtersSlice"
import { apiSlice } from "../api/apiSlice"
 
const stringMiddleware = () => (dispatch) => (action) => {
    if (typeof action === "string") {
        return dispatch({ type: action })
    }
    
    return dispatch(action)
}

const store = configureStore({
    reducer: { deities, filters, [apiSlice.reducerPath]: apiSlice.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
    devTools: process.env.NODE_ENV !== "production"
})

export default store