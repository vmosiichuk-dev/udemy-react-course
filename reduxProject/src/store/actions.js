export const fetching = () => ({
    type: "STATUS_FETCHING"
})

export const fetchedDeities = (payload) => ({
    type: "STATUS_DEITIES_FETCHED", payload: payload
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

export const domain = (payload) => ({ 
    type: "FORM_INPUT_DOMAIN", payload: payload
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

export const deleteDeity = (payload) => ({ 
    type: "DELETE_DEITY", payload: payload 
})