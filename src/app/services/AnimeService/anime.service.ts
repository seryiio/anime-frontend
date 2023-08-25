import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from 'src/assets/models/Anime';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private baseURL = 'https://myanime-app-api.onrender.com/api/animes';

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
}
