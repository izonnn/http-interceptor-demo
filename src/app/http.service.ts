import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService<T> {

  fakeApi: string = 'http://httpstat.us/';

  constructor(private httpService: HttpClient) { }

  get(): Observable<T> {
    // Qurey param (200) for get result code 200.
    return this.httpService.get<T>(`${this.fakeApi}/200`);
  }
}
