import { createReducer } from "@reduxjs/toolkit"
import { submit, filterChange, fetchData, deleteDeity } from "./actions"

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
    .addCase(fetchData.pending, state => {
      state.status = "loading"
    })
    .addCase(fetchData.rejected, state => {
      state.status = "error"
    })
    .addCase(filterChange, (state, action) => {
      state.activeFilter = action.payload
    })
    .addCase(submit, (state, action) => {
      state.deities = state.deities.concat(action.payload)
    })
    .addCase(deleteDeity.fulfilled, (state, action) => {
      state.deities = state.deities.filter(deity => deity.id !== action.payload.deityID)
    })
    .addCase(deleteDeity.rejected, state => {
        state.status = "error"
    })
    .addDefaultCase(() => {})
})

export default reducer