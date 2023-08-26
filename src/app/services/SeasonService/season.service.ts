import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Season } from 'src/assets/models/Season';
import { environment } from 'src/environments/enviroment.production';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private baseURL = environment.apiUrl + "seasons";

  constructor(private http: HttpClient) { }

  getSeasons():Observable<Season[]> {
    return this.http.get<Season[]>(`${this.baseURL}`);
  }

  getActiveSeasons(): Observable<Season[]> {
    return this.http.get<Season[]>(`${this.baseURL}/active`);
  }
}
