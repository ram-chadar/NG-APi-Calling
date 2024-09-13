import { JsonPipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DummyApiService {
  constructor(private http: HttpClient) {}

  getDummyData(num:number): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/posts/${num}`;
    return this.http.get<any>(url).pipe(
      //erro handling
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    alert('Data not found');
    return throwError(error.message);
  }
}
