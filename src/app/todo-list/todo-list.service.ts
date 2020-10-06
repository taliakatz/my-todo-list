import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Itodo } from './todo';
import { catchError, tap, reduce, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ToDoService {
    private url: string = `${environment.baseUrl}api/task`;

    constructor(private http: HttpClient) { }

    getTasks(userId: string): Observable<Itodo> {
        return this.http.get<any>(`${this.url}/user/${userId}`)
            .pipe(
                map(t => {
                    return t.data.map(element => {
                        return {
                            taskDescription: element.description,
                            completed: element.completed,
                            dateCreated: element.dateCreated,
                            id: element._id
                        } as Itodo;
                    });
                }),
                //tap(data => console.log('Tasks:.. ', JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    private handleError(err: any) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }
}
