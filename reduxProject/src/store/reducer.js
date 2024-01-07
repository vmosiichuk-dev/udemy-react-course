const initialState = {
    deities: [],
    filters: [],
    nameValue: "",
    domainValue: "",
    elementValue: "",
    status: "idle",
    activeFilter: "all"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "STATUS_FETCHING": return {
            ...state,
            status: "loading"
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
        case "STATUS_ERROR": return {
            ...state,
            status: "error"
        }
        case "FORM_INPUT_NAME": return {
            ...state,
            nameValue: action.payload
        }
        case "FORM_INPUT_DOMAIN": return {
            ...state,
            domainValue: action.payload
        }
        case "FORM_INPUT_ELEMENT": return {
            ...state,
            elementValue: action.payload
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