import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpService} from './http.service';
import { UserSigninfoService } from './user-signinfo.service';
import {ApiResult} from './Interface/ApiResult';


declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  title = 'igem-frontend';
  constructor( private http: HttpService,
               private userinfo: UserSigninfoService,
  ) {}

  ngOnInit() {
    this.http.get_myself(this.callback);
  }
  callback = (result: ApiResult) => {
    if (result.success) {
      this.userinfo.setUserInfobyInfo(result.success, result.data);
      // this.router.navigateByUrl('/explore');
    }
  }
}
