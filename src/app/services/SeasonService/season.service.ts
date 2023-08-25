import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Season } from 'src/assets/models/Season';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private baseURL = 'https://myanime-app-api.onrender.com/seasons';

  constructor(private http: HttpClient) { }

  getSeasons():Observable<Season[]> {
    return this.http.get<Season[]>(`${this.baseURL}`);
  }

  getActiveSeasons(): Observable<Season[]> {
    return this.http.get<Season[]>(`${this.baseURL}/active`);
  }
}
