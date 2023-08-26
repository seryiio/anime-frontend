import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre_Anime } from 'src/assets/models/GenreAnime';
import { environment } from 'src/environments/enviroment.production';

@Injectable({
  providedIn: 'root'
})
export class GenreAnimeService {

  private baseURL = environment.apiUrl + "api/genre";

  constructor(private http: HttpClient) { }

  getAnimesByGenre(genreId: number): Observable<Genre_Anime[]> {
    return this.http.get<Genre_Anime[]>(`${this.baseURL}/${genreId}`);
  }
}
