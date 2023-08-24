import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from 'src/app/services/AnimeService/anime.service';
import { Anime } from 'src/assets/models/Anime';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  id: any;
  animes?: Anime[];

  @Input() viewMode = false;

  @Input() animeById: Anime = {
    title: '',
    description: '',
    image: '',
    coverImage: '',
    urlTrailer:'',
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

  message= "No se encontro este anime";

  constructor(
    private animeService: AnimeService, private animeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.GetAnimeById(this.animeRouter.snapshot.params["id"]);
    }
  }

  GetAnimeById(id: number): void {
    this.animeService.getAnimeById(id)
      .subscribe({
        next: (data:any) => {
          this.animeById = data;
          console.log(this.animeById.urlTrailer);
        },
        error: (e) => console.error(e)
      });
  }
}
