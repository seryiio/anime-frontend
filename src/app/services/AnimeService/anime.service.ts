import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from 'src/assets/models/Anime';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private baseURL = 'http://localhost:8080/animes';

  constructor(private http: HttpClient) { }

  getAnimes():Observable<Anime[]> {
    return this.http.get<Anime[]>(`${this.baseURL}`);
  }

  getAnimeById(id:number):Observable<Anime[]> {
    return this.http.get<Anime[]>(`${this.baseURL}/${id}`);
  }

  getSeasonStatusForAllAnime(): Observable<Record<number, boolean[]>> {
    const url = `${this.baseURL}/season-status`;
    return this.http.get<Record<number, boolean[]>>(url);
  }
}
