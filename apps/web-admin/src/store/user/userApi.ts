import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Company, ICreateJobOffer, IJobOffer, IUpdateJobOffer } from '@kudyniuk/shared-types';
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
  tagTypes: ['JOB_OFFERS'],
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
    getUserJobOffers: builder.query<IJobOffer[], void>({
      query: () => 'job-offers',
      providesTags: ['JOB_OFFERS']
    }),
    createUserJobOffer: builder.mutation<IJobOffer, ICreateJobOffer>({
      query: (jobOffer) => ({
        url: "job-offers",
        method: 'POST',
        body: jobOffer
      }),
      invalidatesTags: ["JOB_OFFERS"]
    }),
    updateUserJobOffer: builder.mutation<IJobOffer, IUpdateJobOffer & { id: number }>({
      query: ({ id, ...body }) => ({
        url: `job-offers/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["JOB_OFFERS"]
    })
  }),
});

export const {
  useGetUserCompanyQuery,
  useUpdateUserCompanyMutation,
  useGetUserJobOffersQuery,
  useCreateUserJobOfferMutation,
  useUpdateUserJobOfferMutation
} = userApi;
