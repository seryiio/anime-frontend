import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from 'src/assets/models/Anime';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroment.production';
import { Genre_Anime } from 'src/assets/models/GenreAnime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private baseURL = environment.apiUrl + "animes";

  constructor(private http: HttpClient) { }

  getAnimes():Observable<Anime[]> {
    return this.http.get<Anime[]>(`${this.baseURL}`);
  }

  getAnimeById(id:number):Observable<Anime[]> {
    return this.http.get<Anime[]>(`${this.baseURL}/${id}`);
  }

  getActiveAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(`${this.baseURL}/active`);
  }
  
  getSeasonByAnimeId(id: number): Observable<Anime[]> {
    return this.http.get<Anime[]>(`${this.baseURL}/${id}/seasons`);
  }
}
