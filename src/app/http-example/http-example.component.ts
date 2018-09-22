import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ApiResult } from '../Interface/ApiResult';
import { FuncEle } from '../Interface/FunctionElement';



@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.less']
})

export class HttpExampleComponent implements OnInit {
  choice: string;
  request: string;
  response: string;


  FunctionList: Array<FuncEle> = [
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
    {name: '拿头像框下面的四个数据', lable: 'get_stat_by_id', func: this.http.get_stat_by_id, templa: {id: 1}},
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
    {name: '获取reports', lable: 'get_all_my_reports', func: this.http.get_all_my_reports, templa:
    JSON.parse(`{"title":"11","introduction":"33","label":["22"],
    "mdate":"","ndate":"","result":[{"desc":"11111","subType":"Text","list":[],"pic":[]},
    {"desc":"","subType":"List","list":[{"str":"111"},{"str":"2222"},{}],"pic":[]}],
    "subroutines":[{"id":"-1","desc":"","name":"Add","idx":0,"steps":[{"name":"Add","data":{"Volume":"111111","Name":"2","container":"3"},
    "id":"2","remark":"444"}]},{"id":"1","name":"Incubate","idx":0,
    "steps":[{"name":"Add","data":{"Name":"template","Volume":"0","container":""},"id":"2","remark":""},
    {"name":"Add","data":{"Name":"buffer","Volume":"0","container":""},"id":"2","remark":""},
    {"name":"Add","data":{"Name":"enzyme","Volume":"0","container":""},"id":"2","remark":""},
    {"name":"Mix","data":{"Type":"摇晃"},"id":"4","remark":""},{"name":"Incubate","data":{"Num":"37"},"id":"9","remark":""}]}],
    "id":0,"author":[]}
    `)
    },
    {name: '获取subroutine', lable: 'get_all_my_subroutine', func: this.http.get_all_my_subroutines, templa: {}}
  ];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.request = '';
    this.response = '';
  }


  fires() {
    const __this = this;
    // const request = JSON.parse(this.request);
    const temp = JSON.parse(this.request);
    const callback = function(result: ApiResult) {
      console.log(result);
      console.log(result.success);
      __this.response = JSON.stringify(result, null, ' ');
    };
    const request = [];
    Object.keys(temp).forEach(key => {
      console.log(key, temp[key]);
      request.push(temp[key]);
    });
    request.push(callback);

    for (const select of this.FunctionList) {
      if (this.choice === select.lable) {
        select.func.apply(this.http, request);
        break;
      }
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
