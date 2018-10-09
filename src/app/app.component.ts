import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';
import { UserSigninfoService } from './user-signinfo.service';
import {ApiResult} from './Interface/ApiResult';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'igem-frontend';
  constructor( private http: HttpService,
               private myinfo: UserSigninfoService) {
    // this.http.user_logout(() => {});
    // this.http.user_login('miaowashuang', 'yjw123456', this.callback);
  }
  // callback = (result: ApiResult) => {
  //   this.myinfo.setUserInfobyInfo(result.success, result.data);
  //   if (result.success) {
  //     console.log('log in success');
  //   } else {
  //     console.log('fail');
  //   }
  // }
}
