import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { BaseService } from '../../shared/services/base/base.service';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService extends BaseService {
  constructor(private http: HttpClient) {
    super();
    this.url = environment.apiURLPlayers;
  }

  getAll(): Observable<Player[]> {
    console.log(this.url);
    const response: Observable<Player[]> = this.http.get<Player[]>(
      `${this.url}/football_functions`,
      this.GetHeader()
    );
    return response;
  }

  sortTeams(ids: string[]): Observable<any> {
    console.log(this.url);

    const response: Observable<any> = this.http.post<any>(
      `${this.url}/teams`,
      ids,
      this.GetHeader()
    );

    return response;
  }
}
