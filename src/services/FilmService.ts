import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPopularFilm } from "../types";
export const filmAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/movie" }),
  tagTypes: ["popularFilms"],
  endpoints: (build) => ({
    fetchPopularFilms: build.query<IPopularFilm, string>({
      query: (api) => ({
        url: `/popular/?api_key=${api}&language=ru-RU&page=1%27`,
      }),
      providesTags: (result) => ["popularFilms"],
    }),
  }),
});
