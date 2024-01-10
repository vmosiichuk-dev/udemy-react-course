import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

/* export const fetching = createAction("STATUS_FETCHING")
export const fetchingDeities = createAction("STATUS_DEITIES_FETCHED")
export const fetchingFilters = createAction("STATUS_FILTERS_FETCHED")
export const error = createAction("STATUS_ERROR") */
export const submit = createAction("FORM_SUBMIT")
export const filterChange = createAction("FILTER_CHANGE")
/* 
export const deleteDeity = (request, deityID) => (dispatch) => { 
    request(`http://localhost:3001/deities/${deityID}`, "DELETE")
    .then(dispatch({ 
        type: "DELETE_DEITY", payload: deityID 
    }))
    .catch(err => { 
        dispatch(error)
        console.error("Error deleting item", err)
    })
}
 */
/* 
export const deleteDeity = (request, deityID) => async (dispatch) => {
    try {
        dispatch(fetching())
        await request(`http://localhost:3001/deities/${deityID}`, "DELETE")
        dispatch({ type: "DELETE_DEITY", payload: deityID })
    } catch (err) {
        dispatch(error())
        console.error("Error deleting item", err)
    }
} */
/* 
export const fetchData = (request, paths) => (dispatch) => {
    dispatch(fetching)

    paths.forEach(path => {
        let actionCreator

        switch (path) {
            case "deities": actionCreator = fetchingDeities; break
            case "filters": actionCreator = fetchingFilters; break
            default: break
        }

        request(`http://localhost:3001/${path}`)
        .then(data => dispatch(actionCreator(data)))
        .catch(() => dispatch(error))
    })
}
 */
export const fetchData = createAsyncThunk("FETCH_DATA", async (_, { rejectWithValue }) => {
    try {
        const deitiesResponse = await fetch("http://localhost:3001/deities")
        const filtersResponse = await fetch("http://localhost:3001/filters")
    
        const deities = await deitiesResponse.json()
        const filters = await filtersResponse.json()
    
        return { deities, filters }
    } catch (error) {
        console.error("Error fetching data", error)
        return rejectWithValue(error.message)
    }
  })

/*

const fetching = () => ({ type: "STATUS_FETCHING" })

export const error = () => ({ type: "STATUS_ERROR" })

const fetchingDeities = (payload) => ({ type: "STATUS_DEITIES_FETCHED", payload: payload })

const fetchingFilters = (payload) => ({ type: "STATUS_FILTERS_FETCHED", payload: payload })


export const fetchData = (request, paths) => (dispatch) => {
    dispatch(fetching)

    paths.forEach(path => {
        let actionCreator

        switch (path) {
            case "deities": actionCreator = fetchingDeities; break
            case "filters": actionCreator = fetchingFilters; break
            default: break
        }

        request(`http://localhost:3001/${path}`)
        .then(data => dispatch(actionCreator(data)))
        .catch(() => dispatch(error))
    })
}

export const deleteDeity = (request, deityID) => (dispatch) => { 
    request(`http://localhost:3001/deities/${deityID}`, "DELETE")
    .then(dispatch({ 
        type: "DELETE_DEITY", payload: deityID 
    }))
    .catch(err => { 
        dispatch(error)
        console.error("Error deleting item", err)
    })
}


export const submit = (payload) => ({ type: "FORM_SUBMIT", payload: payload })

export const filterChange = (payload) => ({ type: "FILTER_CHANGE", payload: payload })

*/