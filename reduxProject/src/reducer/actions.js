import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

export const submit = createAction("FORM_SUBMIT")
export const filterChange = createAction("FILTER_CHANGE")


export const deleteDeity = createAsyncThunk("DELETE_DEITY", async ({ request, deityID }, { rejectWithValue }) => {
    try {
        await request(`http://localhost:3001/deities/${deityID}`, "DELETE")
        return { deityID }
    } catch (error) {
        console.error("Error deleting item. DeityID: " + deityID, error)
        return rejectWithValue(error.message)
    }
})

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