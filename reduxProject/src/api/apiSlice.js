import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    tagTypes: ["Deities", "Filters"],
    endpoints: builder => ({
        getDeities: builder.query({
            query: () => "/deities",
            providesTags: ["Deities"]
        }),
        addDeity: builder.mutation({
            query: userAddedDeity => ({
                url: "/deities",
                method: "POST",
                body: userAddedDeity
            }),
            invalidatesTags: ["Deities"]
        }),
        deleteDeity: builder.mutation({
            query: deityID => ({
                url: `/deities/${deityID}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Deities"]
        }),
        getFilters: builder.query({
            query: () => "/filters",
            providesTags: ["Filters"]
        })
    })
})

export const { useGetDeitiesQuery, useAddDeityMutation, useDeleteDeityMutation, useGetFiltersQuery } = apiSlice