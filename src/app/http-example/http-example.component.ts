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
      case 'user_register': this.http.user_register(request['username'], request['password'], request['email'], callback); break;
      case 'user_login': this.http.user_login(request['username'], request['password'], callback); break;
      case 'get_user_by_id': this.http.get_user_by_id(request['id'], callback); break;
      case 'get_myself': this.http.get_myself(callback); break;
      case 'follow_user_by_id': this.http.follow_user_by_id(request['user_id'], callback); break;
      case 'unfollow_user_by_id': this.http.unfollow_user_by_id(request['user_id'], callback); break;
      case 'get_all_my_followers': this.http.get_all_my_followers(callback); break;
      case 'user_logout': this.http.user_logout(callback); break;
      case 'update_password': this.http.user_logout(callback); break;
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
      case 'get_user_by_id':
        this.Stringfy({
          id: '1'
        }); break;
      case 'get_myself':
        this.Stringfy({}); break;
      case 'follow_user_by_id':
        this.Stringfy({
          user_id: '1'
        }); break;
      case 'unfollow_user_by_id':
        this.Stringfy({
          user_id: '1'
        }); break;
      case 'get_all_my_followers':
        this.Stringfy({
        }); break;
      case 'user_logout':
        this.Stringfy({
        }); break;
    }

  }

  Stringfy(request: object) {
    this.request = JSON.stringify(request, null, ' ');
  }

}

