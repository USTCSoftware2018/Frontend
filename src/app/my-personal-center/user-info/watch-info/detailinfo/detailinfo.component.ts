import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../../../Interface/userinfo';
import {HttpService} from '../../../../http.service';
import {UserSigninfoService} from '../../../../user-signinfo.service';
import {ApiResult} from '../../../../Interface/ApiResult';

@Component({
  selector: 'app-detailinfo',
  templateUrl: './detailinfo.component.html',
  styleUrls: ['./detailinfo.component.less']
})
export class DetailinfoComponent implements OnInit {
  user: User ;
  // store the status of following followers likes anf reports
  constructor(
    private userinfo: UserSigninfoService,
    private http: HttpService
  ) {
    // this.user.id = this.userinfo.myInfo.id;
  }

  ngOnInit() {
    this.user = new User();
    this.user.id = this.userinfo.myInfo.id;
    this.http.get_followers_by_id(this.user.id, this.followersCB);
    this.http.get_followings_by_id(this.user.id, this.followingCB);
    this.http.get_report_list_by_user_id(this.user.id, this.reportsCB);
  }
  followersCB = (result: ApiResult) => {
    if (result.success) {
      this.user.followers = result['data']['results'].concat();
    }
  }
  followingCB = (result: ApiResult) => {
    if (result.success) {
      this.user.following = result['data']['results'].concat();
    }
  }
  reportsCB = (result: ApiResult) => {
    if (result.success) {
      this.user.reports = result['data']['results'].concat();
    }
  }
}
