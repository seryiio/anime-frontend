import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from 'src/assets/models/Genre';
import { environment } from 'src/environments/enviroment.production';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private baseURL = environment.apiUrl + "api/genres";

  constructor(private http: HttpClient) { }

  getGenres():Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.baseURL}`);
  }
}
