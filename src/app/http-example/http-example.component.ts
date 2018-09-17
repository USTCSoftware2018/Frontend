import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ApiResult } from '../Interface/ApiResult';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.less']
})
export class HttpExampleComponent implements OnInit {
  choice: string;
  request: string;
  response: string;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.request = '';
    this.response = '';
  }

  fire() {
    const __this = this;
    const request = JSON.parse(this.request);
    const callback = function(result: ApiResult) {
      console.log(result);
      __this.response = JSON.stringify(result, null, ' ');
    };
    console.log(this.choice);
    switch (this.choice) {
      case 'user_register': this.http.user_register(request['username'], request['password'], request['username'], callback); break;
      case 'user_login': this.http.user_login(request['username'], request['password'], callback); break;
    }
  }

  refresh() {
    console.log(this.choice);
    switch (this.choice) {
      case 'user_register':
        this.Stringfy({
            username: 'test',
            password: 'a123456',
            email: 'test@test.com'
          }); break;
      case 'user_login':
        this.Stringfy({
          username: 'test',
          password: 'a123456'
        }); break;
    }
  }

  Stringfy(request: object) {
    this.request = JSON.stringify(request, null, ' ');
  }

}

