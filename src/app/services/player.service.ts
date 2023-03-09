import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Player } from '../models/player';

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  getPlayers(): Observable<{ player: Player[] }> {
    return this.httpClient
      .get<{ player: Player[] }>(environment.apiUrl + "/player")
      .pipe(retry(2));
  }

  getTeams(ids: string[]): Observable<any> {
    return this.httpClient
      .post(
        `${environment.apiUrl}/player/teams`,
        JSON.stringify(ids),
        this.httpOptions
      )
      .pipe(retry(2));
  }
}
