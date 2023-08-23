import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from 'src/assets/models/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private baseURL = 'http://localhost:8080/genres';

  constructor(private http: HttpClient) { }

  getGenres():Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.baseURL}`);
  }
}
