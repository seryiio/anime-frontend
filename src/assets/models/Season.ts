import { Anime } from "./Anime";

export interface Season {
    id?: number;
    number?: number;
    startDate?: number;
    endDate?: number;
    description?: string;
    status?: boolean;
    anime?: Anime;
}