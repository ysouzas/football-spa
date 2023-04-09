import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
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
    const response: Observable<Player[]> = this.http.get<Player[]>(
      `${this.url}`,
      this.GetHeader()
    );
    return response;
  }

  sortTeams(ids: string[]): Observable<any> {
    const response: Observable<any> = this.http.post<any>(
      `${this.url}`,
      ids,
      this.GetHeader()
    );

    return response;
  }
}
