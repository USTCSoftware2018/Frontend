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

  FunctionList = [
    {name: '登录', lable: 'user_login', func: this.http.user_login, templa: {
      username: 'test',
      password: 'b123456'
    }},
    {name: '注册', lable: 'user_register', func: this.http.user_register, templa: {
      username: 'test',
      password: 'a123456',
      email: 'test@test.com'
    }},
    {name: '拿到用户信息', lable: 'get_user_by_id', func: this.http, templa: {
      id: '1'
    }},
    {name: '我是谁', lable: 'get_myself', func: this.http.get_myself, templa: {}},
    {name: '拿头像框下面的四个数据', lable: '', func: '', templa: {}},
    {name: '关注某人', lable: 'follow_user_by_id', func: this.http.follow_user_by_id, templa: {
      user_id: '1'
    }},
    {name: '取消关注某人', lable: 'unfollow_user_by_id', func: this.http.unfollow_user_by_id, templa: {
      user_id: '1'
    }},
    {name: '拿到我的所有follower', lable: 'get_all_my_followers', func: this.http.get_all_my_followers, templa: {}},
    {name: '拿到我的所有following', lable: 'get_all_my_followings', func: this.http.get_all_my_followers, templa: {}},
    {name: '退出登录', lable: 'user_logout', func: this.http.user_logout, templa: {}},
    {name: '更改密码', lable: 'update_password', func: this.http.update_password, templa: {
      old: 'b123456',
      new1: 'a123456',
      new2: 'a123456'
    }},
    {name: '获取steps', lable: 'get_all_my_steps', func: this.http.get_all_my_steps, templa: {}},
    {name: '获取reports', lable: 'get_all_my_reports', func: this.http.get_all_my_reports, templa: {}}
  ];
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
      console.log(result.success);
      __this.response = JSON.stringify(result, null, ' ');
    };
    console.log(this.choice);

    switch (this.choice) {
      case 'user_logout': this.http.user_logout(callback); break;
      case 'user_register': this.http.user_register(request['username'], request['password'], request['email'], callback); break;
      case 'user_login': this.http.user_login(request['username'], request['password'], callback); break;
      case 'get_user_by_id': this.http.get_user_by_id(request['id'], callback); break;
      case 'get_myself': this.http.get_myself(callback); break;
      case 'follow_user_by_id': this.http.follow_user_by_id(request['user_id'], callback); break;
      case 'unfollow_user_by_id': this.http.unfollow_user_by_id(request['user_id'], callback); break;
      case 'get_all_my_followers': this.http.get_all_my_followers(callback); break;
      case 'get_all_my_steps': this.http.get_all_my_steps(callback); break;
      case 'get_all_my_reports': this.http.get_all_my_reports(callback); break;
      case 'update_password': this.http.update_password(request['old'], request['new1'] , callback); break;
    }
  }

  refresh() {
    console.log(this.choice);
    for (const t of this.FunctionList) {
      if (this.choice === t.lable) {
        this.Stringfy(t.templa);
      }
  }
  }

  Stringfy(request: object) {
    this.request = JSON.stringify(request, null, ' ');
  }

}

