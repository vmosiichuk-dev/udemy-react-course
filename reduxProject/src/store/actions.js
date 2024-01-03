export const fetching = () => ({
    type: "STATUS_FETCHING"
})

export const fetchedHeroes = (payload) => ({
    type: "STATUS_HEROES_FETCHED", payload: payload
})

export const fetchedFilters = (payload) => ({
    type: "STATUS_FILTERS_FETCHED", payload: payload
})

export const error = () => ({
    type: "STATUS_ERROR"
})

export const name = (payload) => ({ 
    type: "FORM_INPUT_NAME", payload: payload
})

export const skill = (payload) => ({ 
    type: "FORM_INPUT_SKILL", payload: payload
})

export const element = (payload) => ({ 
    type: "FORM_INPUT_ELEMENT", payload: payload 
})

export const submit = (payload) => ({ 
    type: "FORM_SUBMIT", payload: payload 
})

export const filterChange = (payload) => ({ 
    type: "FILTER_CHANGE", payload: payload 
})