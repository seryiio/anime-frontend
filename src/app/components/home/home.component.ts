import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/services/AnimeService/anime.service';
import { GenreService } from 'src/app/services/GenreService/genre.service';
import { SeasonService } from 'src/app/services/SeasonService/season.service';
import { Anime } from 'src/assets/models/Anime';
import { Genre } from 'src/assets/models/Genre';
import { Season } from 'src/assets/models/Season';
import Swiper from 'swiper'
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animes: Anime[] = [];
  seasons: Season[] = [];
  genres: Genre[] = [];
  activeSeasons: Season[] = [];
  constructor(
    private animeService: AnimeService, private animeRouter: Router,
    private genreService: GenreService, private genreRouter: Router,
    private seasonService: SeasonService, private seasonRouter: Router
  ) { }

  ngOnInit() {

    this.GetSeasonActive();
    this.GetAnimes();
    this.GetSeasons();
    this.GetGenrer();

  }

  private GetGenrer() {
    this.genreService.getGenres().subscribe(data => {
      this.genres = data;
    })
  }

  private GetAnimes() {
    this.animeService.getAnimes().subscribe(data => {
      this.animes = data;
    })
  }

  private GetSeasons() {
    this.seasonService.getSeasons().subscribe(data => {
      console.log(data);
      this.seasons = data;
    })
  }

  private GetSeasonActive() {
    this.seasonService.getActiveSeasons().subscribe(
      activeSeasons => {
        console.log(activeSeasons);
        this.activeSeasons = activeSeasons;
      }
    );
  }

  getStatusIconClass(status: boolean): string {
    return status ? 'status-icon-green' : 'status-icon-red';
  }

  viewAnimebyId(id :number){
    this.animeRouter.navigate(['/anime',id]);
  }
}
