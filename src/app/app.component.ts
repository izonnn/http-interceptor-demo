import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-5">
      <button class="btn btn-primary" (click)="getRequest()">Click me - 200 Response Code</button>
    </div>
  `,
})
export class AppComponent {
  title = 'http-interceptor-demo';

  constructor(private httpService: HttpService) { }

  getRequest() {
    this.httpService.get<any>().subscribe();
  }
}
