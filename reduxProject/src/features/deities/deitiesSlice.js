import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { useHttp } from "../../hooks/useHttp"

const initialState = {
    status: "idle",
    deities: []
}

export const deitiesFetchList = createAsyncThunk(
    "deities/deitiesFetchList", 
    async (_, { rejectWithValue }) => {
        try {
            const deitiesResponse = await fetch("http://localhost:3001/deities")
            const deities = await deitiesResponse.json()

            return { deities }
        } catch (error) {
            console.error("Error occurred while fetching deities.", error)
            return rejectWithValue(error.message)
        }
    }
)

export const deitiesSubmitForm = createAsyncThunk(
    "deities/deitiesSubmitForm", 
    async (userAddedDeity, { rejectWithValue }) => {
        try {
            const { request } = useHttp()
            await request("http://localhost:3001/deities", "POST", JSON.stringify(userAddedDeity))

            return { userAddedDeity }
        } catch (error) {
            console.error("Error occurred while submitting form.", error)
            return rejectWithValue(error.message)
        }
    }
)

export const deitiesDeleteItem = createAsyncThunk(
    "deities/deitiesDeleteItem", 
    async (deityID, { rejectWithValue }) => {
        try {
            const { request } = useHttp()
            await request(`http://localhost:3001/deities/${deityID}`, "DELETE")

            return { deityID }
        } catch (error) {
            console.error("Error occurred while deleting item.", error)
            return rejectWithValue(error.message)
        }
    }
)

const deitiesSlice = createSlice({
    name: "deities",
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(deitiesFetchList.fulfilled, (state, action) => {
            state.status = "idle"
            state.deities = action.payload.deities
        })
        .addCase(deitiesFetchList.pending, state => {
            state.status = "loading"
        })
        .addCase(deitiesFetchList.rejected, state => {
            state.status = "error"
        })
        .addCase(deitiesSubmitForm.fulfilled, (state, action) => {
            state.deities = state.deities.concat(action.payload.userAddedDeity)
        })
        .addCase(deitiesSubmitForm.rejected, state => {
            state.status = "error"
        })
        .addCase(deitiesDeleteItem.fulfilled, (state, action) => {
            state.deities = state.deities.filter(deity => deity.id !== action.payload.deityID)
        })
        .addCase(deitiesDeleteItem.rejected, state => {
            state.status = "error"
        })
    }
})

const { reducer } = deitiesSlice

export default reducer