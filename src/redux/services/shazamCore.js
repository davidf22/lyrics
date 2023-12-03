import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamcoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '8cce563652msh64e1e09e550588ep113ff1jsn72cefabd93a9');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/get-top-songs-in-world' }),
    getSongDetails: builder.query({ query: () => `/songs/get_details?id=${293401556}` }),
    getRelatedSongs: builder.query({ query: () => `/songs/list-recommendations?id=${293401556}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
} = shazamcoreApi;
