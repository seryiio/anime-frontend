export class Anime {
    constructor(
        public id: number,
        public title: string,
        public season: number,
        public description: string,
        public episodes: number,
        public image: string,
        public year: number
    ) { }
}