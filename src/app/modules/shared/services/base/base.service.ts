import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export abstract class BaseService {
  protected url: string = environment.apiUrl;

  protected GetHeader() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  protected GetData(response: any) {
    debugger;
    return response.data || {};
  }

  protected serviceError(response: Response | any) {
    const customError: Error[] = [];

    if (response instanceof HttpErrorResponse) {
      customError.push(new Error(response.message));
    }

    console.log(response);

    return throwError(() => customError);
  }
}
