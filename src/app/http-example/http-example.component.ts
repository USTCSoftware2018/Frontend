import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ApiResult } from '../Interface/ApiResult'
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

  FunctionList = {
      'Register' : this.Register
  };

   Register(register_request: string) {
    const that = this;
    console.log(this);
    const request = JSON.parse(register_request);
    const callback = function(result: ApiResult) {
      console.log(typeof(result));
      console.log(result);
      that.response = JSON.stringify(result, null, ' ');
    };
    that.http.user_register(request, callback);
  }

  ngOnInit() {
    this.request = JSON.stringify({
      username: 'test',
      password: 'a123456',
      email: 'test_5@test.com'
    }, null, ' ');
    // this.http.test_fire();

    this.response = JSON.stringify({
      username: 'test',
      password: 'a123456'
    });
  }

  Try(request: string, callback: any) {
    callback(request);
  }



  Login(login_request: string) {
    const that = this;
    const request = JSON.parse(login_request);
    const callback = function(result: ApiResult) {
      that.response = JSON.stringify(result, null, ' ');
    };
    this.http.user_login(request, callback);
  }
}

