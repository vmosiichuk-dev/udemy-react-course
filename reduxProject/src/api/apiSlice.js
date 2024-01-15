import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: builder => ({
        getDeities: builder.query({
            query: () => "/deities"
        })
    })
})

export const { useGetDeitiesQuery } = apiSlice