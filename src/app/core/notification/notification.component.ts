import { Component, OnInit } from '@angular/core';
import { Simuser, Report } from '../../Interface/userinfo';
import { user1, user2, report1 } from '../../Interface/mock-user';
import { NOTIS } from './mock-notification';
import { LikeNotification, FollowNotification } from './notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent implements OnInit {

  user = user1;
  notifications = NOTIS;
  constructor() { }
  ngOnInit() {
  }
}
