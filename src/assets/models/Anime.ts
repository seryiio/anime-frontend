import { Genre_Anime } from "./GenreAnime";
import { Season } from "./Season";

export interface Anime {
    id?: number;
    title?: string;
    type?: string;
    description?: string;
    year?: number;
    image?: string;
    coverImage?: string;
    url?: string;
    urlTrailer?:string;
    status?: boolean;
    seasons?: Season[];
}