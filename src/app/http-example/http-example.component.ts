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
    {name: '拿到用户信息', lable: 'get_user_by_id', func: this.http.get_user_by_id, templa: {
      id: '1'
    }},
    {name: '我是谁', lable: 'get_myself', func: this.http.get_myself, templa: {}},
    {name: '拿到Simuser', lable: 'get_simuser_by_id', func: this.http.get_simuser_by_id, templa: {id: 1}},
    {name: '关注某人', lable: 'follow_user_by_id', func: this.http.follow_user_by_id, templa: {
      user_id: '1'
    }},
    {name: '取消关注某人', lable: 'unfollow_user_by_id', func: this.http.unfollow_user_by_id, templa: {
      user_id: '1'
    }},
    {name: '拿到我的的所有follower', lable: 'get_followers_by_id', func: this.http.get_followers_by_id, templa: {
      id: 'me'
    }},
    {name: '拿到我的所有following', lable: 'get_followings_by_id', func: this.http.get_followings_by_id, templa: {
      id: 'me'
    }},
    {name: '拿到一个人的所有follower', lable: 'get_followers_by_id', func: this.http.get_followers_by_id, templa: {
      id: '2'
    }},
    {name: '拿到一个人的所有following', lable: 'get_followings_by_id', func: this.http.get_followings_by_id, templa: {
      id: '2'
    }},
    {name: '退出登录', lable: 'user_logout', func: this.http.user_logout, templa: {}},
    {name: '更改密码', lable: 'update_password', func: this.http.update_password, templa: {
      old: 'b123456',
      new1: 'a123456'
    }},
    {name: '通过report的id获取report', lable: 'get', func: this.http.get_report_list_by_userid, templa: {
      id: 1
    }},
    {name: '获取一个人的所有reports列表', lable: 'get_reports_list_by_id', func: this.http.get_report_list_by_userid, templa: {
      id: 1
    }},
    {name: '更新profile', lable: 'update_profile', func: this.http.update_profile, templa: {
        avatar_url: 'avatar_url',
        actualname: 'actualname',
        location: 'location',
        description: 'description',
        organization: 'organization',
        email: 'email'
    }}
  ];

  EditorList: Array<FuncEle> = [
    {name: '获取steps', lable: 'get_all_my_steps', func: this.http.get_all_my_steps, templa: {}},
    {name: '创建step', lable: 'create_step', func: this.http.create_step, templa: {
      title: 'test'
    }},
    {name: '更新step', lable: 'update_step', func: this.http.update_step, templa: {
      title: 'test'
    }},
    {name: '删除step', lable: 'delet_step', func: this.http.delete_step, templa: {
      id: 1
    }},
    {name: '根据id获取step', lable: 'get_step_by_id', func: this.http.get_step_by_id, templa: {
      id: 1
    }},
    {name: '创建reports', lable: 'create_report', func: this.http.create_report, templa:
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
    {name: '更新report', lable: 'update_report', func: this.http.update_report, templa: {
      id: 1,
      string: '12234'
    }},
    {name: '通过report的id获取report', lable: 'get_report_by_id', func: this.http.get_report_by_id, templa: {
      id: 1
    }},
    {name: '删除report', lable: 'delete_report', func: this.http.delete_report, templa: {
      id: 1,
      string: 'skdljsldj'
    }},
    {name: '更新subroutine', lable: 'update_subroutine', func: this.http.update_subroutine, templa: {
      id: 1,
      subroutine: 'hhh'
    } },
    {name: '创建subroutine', lable: 'create_subroutine', func: this.http.create_subroutine, templa: {
      subroutine: 'hhh'
    }},
    {name: '获取我的所有subroutine', lable: 'get_all_my_subroutine', func: this.http.get_all_my_subroutines, templa: {}},
    {name: '根据id获取subroutine', lable: 'get_subroutine_by_id', func: this.http.get_subroutine_by_id, templa: {
      id: 1
    }},
    {name: '删除subroutine', lable: 'delete', func: this.http.delete_subroutine, templa: {
      id: 1
    }}
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

    const editorRequest = JSON.parse(this.request);
    // editor function
    for (const select of this.EditorList) {
      if (this.choice === select.lable) {
        if (this.request === '{}') {
          select.func.call(this.http, callback);
          // this.http.get_all_my_steps(callback);
        } else {
          select.func.call(this.http, editorRequest, callback);
        }
      }
    }
  }

  refresh() {
    console.log(this.choice);
    for (const t of this.FunctionList) {
      if (this.choice === t.lable) {
        this.Stringfy(t.templa);
      }
    for (const s of this.EditorList) {
      if (this.choice === s.lable) {
        this.Stringfy(s.templa);
      }
    }
  }
  }

  Stringfy(request: object) {
    this.request = JSON.stringify(request, null, ' ');
  }

}
