import { Anime } from "./Anime";

export class Season {
    constructor(
        public id: number,
        public number: number,
        public startDate: number,
        public endDate: number,
        public description: string,
        public status:boolean,
        public anime:Anime,
    ) { }
}