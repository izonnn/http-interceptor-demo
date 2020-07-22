import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  fakeApi: string = 'http://httpstat.us/';

  constructor(private http: HttpClient) { }

  get<T>(): Observable<T> {
    // Qurey param (200) for get result code 200.
    return this.http.get<T>(`${this.fakeApi}/200`);
  }
}
