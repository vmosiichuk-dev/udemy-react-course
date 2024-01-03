const initialState = {
    heroes: [],
    filters: [],
    nameValue: "",
    skillValue: "",
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
        case "STATUS_HEROES_FETCHED": return {
            ...state,
            heroes: action.payload,
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
        case "FORM_INPUT_SKILL": return {
            ...state,
            skillValue: action.payload
        }
        case "FORM_INPUT_ELEMENT": return {
            ...state,
            elementValue: action.payload
        }
        case "FORM_SUBMIT": return {
            ...state,
            heroes: [...state.heroes, action.payload]
        }
        case "FILTER_CHANGE": return {
            ...state,
            activeFilter: action.payload
        }
        default: return state
    }
}

export default reducer