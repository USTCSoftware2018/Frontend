import { Component, OnInit } from '@angular/core';
import { Simuser } from '../../Interface/userinfo';
import { LikeNotification, FollowNotification } from './notification';
import {UserSigninfoService} from '../../user-signinfo.service';
import {HttpService} from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent implements OnInit {

  user: Simuser;
  notifications: (LikeNotification|FollowNotification)[];
  constructor(
    private user_info: UserSigninfoService,
    private http: HttpService,
  ) { }
  ngOnInit() {
    this.user = this.user_info.myInfo;
    this.get_notification();
  }
  get_notification = () => {
    const callback = (result: ApiResult) => {
      if (result.success) {
        this.notifications = result.data.results;
      }
    }
    this.http.get_all_my_notifications(callback);
  }
}
