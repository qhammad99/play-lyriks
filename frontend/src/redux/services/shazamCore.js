import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// exporting two things
// first export is for setting reducer and its path in store to available data in store.
// second export is for calling those services from pages.

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.REACT_APP_SHAZAM_CORE_RAPID_API_KEY);

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  })
});

export const {
  useGetTopChartsQuery
} = shazamCoreApi;