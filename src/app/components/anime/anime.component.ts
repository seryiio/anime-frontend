import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from 'src/app/services/AnimeService/anime.service';
import { GenreAnimeService } from 'src/app/services/GenreAnimeService/genre-anime.service';
import { Anime } from 'src/assets/models/Anime';
import { Genre } from 'src/assets/models/Genre';
import { Genre_Anime } from 'src/assets/models/GenreAnime';
import { Season } from 'src/assets/models/Season';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  id: any;
  animes?: Anime[];
  GenresbyAnime?: Genre_Anime[];
  seasons?: Season[];

  @Input() viewMode = false;

  @Input() animeById: Anime = {
    title: '',
    description: '',
    image: '',
    coverImage: '',
    urlTrailer: '',
    seasons: [
      {
        id: 0,
        number: 0,
        startDate: 0,
        endDate: 0,
        description: '',
        status: false
      }
    ]
  };

  message = "No se encontro este anime";

  constructor(
    private animeService: AnimeService, private animeRouter: ActivatedRoute,
    private genreAnimeService: GenreAnimeService
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.GetAnimeById(this.animeRouter.snapshot.params["id"]);
      this.GetGenresByAnimeId(this.animeRouter.snapshot.params["id"]);
    }
  }

  GetAnimeById(id: number): void {
    this.animeService.getAnimeById(id)
      .subscribe({
        next: (data: any) => {
          this.animeById = data;
        },
        error: (e) => console.error(e)
      });
  }

  GetGenresByAnimeId(animeId: number): void {
    this.genreAnimeService.getGenresByAnimeId(animeId)
      .subscribe(data => {
        this.GenresbyAnime = data;
        console.log(this.GenresbyAnime);
      });
  }
}
