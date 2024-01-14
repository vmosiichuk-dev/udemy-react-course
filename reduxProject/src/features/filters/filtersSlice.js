import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit"

export const filtersFetchList = createAsyncThunk(
    "filters/filtersFetchList", 
    async (_, { rejectWithValue }) => {
        try {
            const filtersResponse = await fetch("http://localhost:3001/filters")
            const filters = await filtersResponse.json()

            return { filters }
        } catch (error) {
            console.error("Error occurred while fetching filters.", error)
            return rejectWithValue(error.message)
        }
    }
)

const filtersAdapter = createEntityAdapter()

const initialState = filtersAdapter.getInitialState({ 
    status: "idle", 
    activeFilter: "all"
})

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
            filtersAdapter.setAll(state, action.payload.filters)
        })
        .addCase(filtersFetchList.rejected, state => {
            state.status = "error"
        })
    }
})

const { actions, reducer } = filtersSlice

export default reducer
export const { filtersChangeActive } = actions 
export const { selectAll } = filtersAdapter.getSelectors(state => state.filters)