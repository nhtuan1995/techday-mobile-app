import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { getToken } from 'libs'

export const sliceApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT,
    prepareHeaders: async (headers) => {
      // const token = await getToken()
      // if (token) {
      //   headers.set('authorization', `Bearer ${token}`)
      // }
      return headers
    },
  }),
  endpoints: () => ({}),
})
