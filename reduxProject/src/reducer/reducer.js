import { createReducer } from "@reduxjs/toolkit"
import { fetchDeities, submitDeity, deleteDeity, fetchFilters, filterChange } from "./actions"

const initialState = {
    deities: [],
    filters: [],
    status: "idle",
    activeFilter: "all"
}

const reducer = createReducer(initialState, builder => {
	builder
    .addCase(fetchDeities.fulfilled, (state, action) => {
		state.status = "idle"
		state.deities = action.payload.deities
    })
    .addCase(fetchDeities.pending, state => {
		state.status = "loading"
    })
    .addCase(fetchDeities.rejected, state => {
		state.status = "error"
    })
    .addCase(submitDeity.fulfilled, (state, action) => {
		state.deities = state.deities.concat(action.payload.userAddedDeity)
    })
    .addCase(submitDeity.rejected, state => {
        state.status = "error"
    })
    .addCase(deleteDeity.fulfilled, (state, action) => {
		state.deities = state.deities.filter(deity => deity.id !== action.payload.deityID)
    })
    .addCase(deleteDeity.rejected, state => {
        state.status = "error"
    })
    .addCase(fetchFilters.fulfilled, (state, action) => {
		state.status = "idle"
		state.filters = action.payload.filters
    })
    .addCase(fetchFilters.rejected, state => {
		state.status = "error"
    })
    .addCase(filterChange, (state, action) => {
		state.activeFilter = action.payload
    })
    .addDefaultCase(() => {})
})

export default reducer