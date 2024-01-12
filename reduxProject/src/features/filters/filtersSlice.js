import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    status: "idle",
    filters: [],
    activeFilter: "all"
}

export const filtersFetchList = createAsyncThunk(
    "filters/filtersFetchList", 
    async (_, { rejectWithValue }) => {
        try {
            const filtersResponse = await fetch("http://localhost:3001/filters")
            const filters = await filtersResponse.json()
            console.log(filters)

            return { filters }
        } catch (error) {
            console.error("Error occurred while fetching filters.", error)
            return rejectWithValue(error.message)
        }
    }
)

const filtersSlice = createSlice({
    name: "filters",
    initialState, 
    reducers: {
        filtersChangeActive: (state, action) => {
            state.activeFilter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(filtersFetchList.fulfilled, (state, action) => {
            state.status = "idle"
            state.filters = action.payload.filters
        })
        .addCase(filtersFetchList.rejected, state => {
            state.status = "error"
        })
    }
})

const { actions, reducer } = filtersSlice

export default reducer
export const { filtersChangeActive } = actions 