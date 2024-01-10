import { createReducer } from "@reduxjs/toolkit"
import { 
/*     fetching, 
    fetchingDeities, 
    fetchingFilters, 
    error,  */
    submit, 
    filterChange, 
    fetchData
    /* deleteDeity  */
} from "./actions"

const initialState = {
    deities: [],
    filters: [],
    status: "idle",
    activeFilter: "all"
}

const reducer = createReducer(initialState, builder => {
    builder
    .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "idle"
        state.deities = action.payload.deities
        state.filters = action.payload.filters
    })
    .addCase(fetchData.pending, state => { state.status = "loading" })
    .addCase(fetchData.rejected, state => { state.status = "error" })
    .addCase(filterChange, (state, action) => { 
        state.activeFilter = action.payload 
    })
    .addCase(submit, (state, action) => { 
        state.deities = state.deities.concat(action.payload)
    })
    //.addCase(deleteDeity, (state, action) => {
    //    state.deities = state.deities.filter(deity => deity.id !== action.payload)
    //})
    .addDefaultCase(() => {})
})

/* 
const reducer = createReducer(initialState, {
    [fetchData.fulfilled]: (state, action) => {
        state.status = "idle"
        state.deities = action.payload.deities
        state.filters = action.payload.filters
    },
    [fetchData.pending]: state => { state.status = "loading" },
    [fetchData.rejected]: state => { state.status = "error" },
    [filterChange]: (state, action) => { 
        state.activeFilter = action.payload 
    },
    [submit]: (state, action) => { 
        state.deities = state.deities.concat(action.payload)
    }
}, [], state => state)
 */
export default reducer