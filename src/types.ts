/* eslint-disable */
export interface IFilm {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | object;
    budget: number;
    genres: IGenres[];
    homepage: string | null;
    id: number;
    imdbId: number | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: IProductionCompanies[];
    production_countries: IProductionCountries[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: ISpokenLanguages[];
    status: string;
    tag_line: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IPopularFilm {
    page: number;
    results: IResult[];
    total_results: number;
    total_pages: number;
}

export interface IResult {
    poster_path: string | null;
    adult: boolean;
    overview: string | null;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export interface IGenres {
    id: number;
    name: string;
}

export interface IProductionCompanies {
    name: string;
    id: number;
    logoPath: string | null;
    originCountry: string;
}

export interface IProductionCountries {
    iso31661: string;
    name: string;
}

export interface ISpokenLanguages {
    iso6391: string;
    name: string;
}
