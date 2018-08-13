import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { User } from './Interface/User';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private userUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}`;
    return this.http.get<User>(url)
      .pipe(
        tap(() => console.log(`fetch user with ${id}`)),
        catchError(this.handleError<User>())
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}


