import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchDeities = createAsyncThunk("FETCH_DEITIES", async (_, { rejectWithValue }) => {
    try {
        const deitiesResponse = await fetch("http://localhost:3001/deities")
        const deities = await deitiesResponse.json()

        return { deities }
    } catch (error) {
        console.error("Error occurred while fetching deities.", error)
        return rejectWithValue(error.message)
    }
})

export const submitDeity = createAsyncThunk("SUBMIT_DEITY", async ({ request, userAddedDeity }, { rejectWithValue }) => {
    try {
        await request("http://localhost:3001/deities", "POST", JSON.stringify(userAddedDeity))

        return { userAddedDeity }
    } catch (error) {
        console.error("Error occurred while submitting form.", error)
        return rejectWithValue(error.message)
    }
})

export const deleteDeity = createAsyncThunk("DELETE_DEITY", async ({ request, deityID }, { rejectWithValue }) => {
    try {
        await request(`http://localhost:3001/deities/${deityID}`, "DELETE")

        return { deityID }
    } catch (error) {
        console.error("Error occurred while deleting item.", error)
        return rejectWithValue(error.message)
    }
})

export const fetchFilters = createAsyncThunk("FETCH_FILTERS", async (_, { rejectWithValue }) => {
    try {
        const filtersResponse = await fetch("http://localhost:3001/filters")
        const filters = await filtersResponse.json()
        console.log(filters)

        return { filters }
    } catch (error) {
        console.error("Error occurred while fetching filters.", error)
        return rejectWithValue(error.message)
    }
})

export const filterChange = createAction("FILTER_CHANGE")