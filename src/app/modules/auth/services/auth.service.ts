import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

import { BaseService } from '../../shared/services/base/base.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  private route = 'auth';
  constructor(private http: HttpClient) {
    super();
  }

  register(user: User): Observable<User> {
    const response: Observable<User> = this.http
      .post<User>(`${this.url}/${this.route}/register`, user, this.GetHeader())
      .pipe(map(this.GetData), catchError(this.serviceError));

    return response;
  }

  login(user: User) {}
}
