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