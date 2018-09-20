import { Component, OnInit } from '@angular/core';
import { Simuser, Report } from '../../Interface/userinfo';
import { Otheruser, Like } from '../../share/likereport/likereport';
import { user1,user2,report1 } from '../../Interface/mock-user';
import { NOTIS } from '../mock-notification';
import { LikeNotification, FollowNotification } from '../notification';
import { HttpService } from '../../http.service';
import { ApiResult } from '../../Interface/ApiResult';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent implements OnInit {

  user = user1;
  notifications = NOTIS;
  isFollowing = true;
  constructor(private http:HttpService) { }
  callback = function(result:ApiResult){
    console.log(result);
  }
  ngOnInit() {
    this.http.get_myself(this.callback);
  }
}
