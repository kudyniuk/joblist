import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Company, JobOffer } from '@kudyniuk/shared-types';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL + 'api/v1/user',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.accessToken;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUserCompany: builder.query<Company, void>({
      query: () => `company`,
    }),
    updateUserCompany: builder.mutation<
      Company,
      { name: string; address: string }
    >({
      query: (company) => ({
        url: 'company',
        method: 'POST',
        body: company,
      }),
    }),
    getUserJobOffers: builder.query<JobOffer[], void>({
      query: () => 'jobOffers',
    }),
  }),
});

export const {
  useGetUserCompanyQuery,
  useUpdateUserCompanyMutation,
  useGetUserJobOffersQuery,
} = userApi;
