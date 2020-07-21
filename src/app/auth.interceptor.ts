import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // Getting guid form local storage
    const guid = localStorage.getItem('guid');

    // Create headers and set guid header
    const headers: HttpHeaders = new HttpHeaders().set('guid', guid);

    // Clone our request with the new headers because HttpRequests are immutable
    const authReq = request.clone({ headers });

    // Last step is to return an Observable that will send the request or pass the request to the next interceptor if any
    return next.handle(authReq);
  }
}
