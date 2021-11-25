import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPopularFilm} from "../types";

export const filmAPI = createApi ( {
    reducerPath: "filmAPI",
    baseQuery: fetchBaseQuery ( {baseUrl: "https://api.themoviedb.org/3/movie"} ),
    tagTypes: ["searchFilms"],
    endpoints: ( build ) => ( {
        fetchSearchFilms: build.query<IPopularFilm,string> ( {
            query: (searchQuery ) => ( {
                url: `/popular/?api_key=a6ef9edc1b078d1c39013abfbd9d8509&language=ru-RU&query=${searchQuery}&page=1&include_adult=false&region=RU`,
            } ),
            providesTags: ( result ) => ["searchFilms"],
        } ),
    } ),
} );
