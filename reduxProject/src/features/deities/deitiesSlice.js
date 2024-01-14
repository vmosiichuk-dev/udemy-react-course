import { useHttp } from "../../hooks/useHttp"
import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit"

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

const deitiesAdapter = createEntityAdapter()

const initialState = deitiesAdapter.getInitialState({ 
    status: "idle" 
})

const deitiesSlice = createSlice({
    name: "deities",
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(deitiesFetchList.fulfilled, (state, action) => {
            state.status = "idle"
            deitiesAdapter.setAll(state, action.payload.deities)
        })
        .addCase(deitiesFetchList.pending, state => {
            state.status = "loading"
        })
        .addCase(deitiesFetchList.rejected, state => {
            state.status = "error"
        })
        .addCase(deitiesSubmitForm.fulfilled, (state, action) => {
            deitiesAdapter.addOne(state, action.payload.userAddedDeity)
        })
        .addCase(deitiesSubmitForm.rejected, state => {
            state.status = "error"
        })
        .addCase(deitiesDeleteItem.fulfilled, (state, action) => {
            deitiesAdapter.removeOne(state, action.payload.deityID)
        })
        .addCase(deitiesDeleteItem.rejected, state => {
            state.status = "error"
        })
    }
})

const { selectAll } = deitiesAdapter.getSelectors(state => state.deities)

export const filteredDeitiesSelector = createSelector(
    state => state.filters.activeFilter,
    selectAll,
    (activeFilter, deities) => {
        if (activeFilter === "all") {
            return deities
        } else {
            return deities.filter(item => item.element === activeFilter)
        }
    }
)

export default deitiesSlice.reducer