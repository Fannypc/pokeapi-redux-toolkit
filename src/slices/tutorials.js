import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokemons-data.herokuapp.com/api/v1",
  }),
  tagTypes: ["Pokemon"],
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: () => "/pokemons",
      providesTags: ["Pokemon"],
    }),
  }),
});

export const { useGetPokemonsQuery } = apiSlice;
