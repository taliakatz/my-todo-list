import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Iuser } from './iuser';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private usersUrl = 'api/users/users.json';
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.usersUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The server returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      console.log('talia2');
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
