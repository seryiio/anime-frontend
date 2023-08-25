import { Component, Input, OnInit } from '@angular/core';
import { Genre_Anime } from 'src/assets/models/GenreAnime';
import { GenreAnimeService } from '../services/GenreAnimeService/genre-anime.service';
import { ActivatedRoute } from '@angular/router';
import { Genre } from 'src/assets/models/Genre';

@Component({
  selector: 'app-genre-anime',
  templateUrl: './genre-anime.component.html',
  styleUrls: ['./genre-anime.component.scss']
})
export class GenreAnimeComponent implements OnInit {

  animesByGenre?: Genre_Anime[];

  @Input() viewMode = false;

  constructor(private genreAnimeService: GenreAnimeService, private genreAnimeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAnimesByGenre(this.genreAnimeRouter.snapshot.params["id"]);
  }

  getAnimesByGenre(genreId: number): void {
    this.genreAnimeService.getAnimesByGenre(genreId)
      .subscribe(data => {
        this.animesByGenre = data;
        console.log(this.animesByGenre);
      });
  }
}
