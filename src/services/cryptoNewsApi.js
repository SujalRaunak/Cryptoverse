import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': '4af4b347c3msh15f3503fc855b9dp1827bejsn5a17f3ac19cc',
  'x-rapidapi-host': 'google-news13.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://google-news13.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

// const options = {
//     method: 'GET',
//     url: 'https://google-news13.p.rapidapi.com/latest',
//     params: {lr: 'en-US'},
//     headers: {
//       'X-RapidAPI-Key': '4af4b347c3msh15f3503fc855b9dp1827bejsn5a17f3ac19cc',
//       'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
//     }
//   };


// const options = {
//   method: 'GET',
//   url: 'https://google-news13.p.rapidapi.com/latest',
//   params: {lr: 'en-US'},
//   headers: {
//     'X-RapidAPI-Key': '4af4b347c3msh15f3503fc855b9dp1827bejsn5a17f3ac19cc',
//     'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
//   }
// };