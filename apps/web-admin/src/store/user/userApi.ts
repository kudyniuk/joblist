import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Company} from 'shared-types'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({ baseUrl: '/api/user', prepareHeaders: (headers, { getState }) => {
  const state = getState() as RootState
  const token = state.auth.accessToken

  if(token) {
    headers.set("authorization", `Bearer ${token}`)
  }

  return headers
} })

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
      getUserCompany: builder.query<Company, void>({
        query: () => `company/`,
      }),
    }),
  })

export const {useGetUserCompanyQuery} = userApi