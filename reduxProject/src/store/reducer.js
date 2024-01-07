const initialState = {
    deities: [],
    filters: [],
    status: "idle",
    activeFilter: "all"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "STATUS_FETCHING": return {
            ...state,
            status: "loading"
        }
        case "STATUS_ERROR": return {
            ...state,
            status: "error"
        }
        case "STATUS_DEITIES_FETCHED": return {
            ...state,
            deities: action.payload,
            status: "idle"
        }
        case "STATUS_FILTERS_FETCHED": return {
            ...state,
            filters: action.payload,
            status: "idle"
        }
        case "FORM_SUBMIT": return {
            ...state,
            deities: [...state.deities, action.payload]
        }
        case "FILTER_CHANGE": return {
            ...state,
            activeFilter: action.payload
        }
        case "DELETE_DEITY": return {
            ...state,
            deities: state.deities.filter(deity => deity.id !== action.payload)
        }
        default: return state
    }
}

export default reducer