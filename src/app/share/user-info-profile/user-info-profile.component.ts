import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-profile',
  templateUrl: './user-info-profile.component.html',
  styleUrls: ['./user-info-profile.component.less']
})
export class UserInfoProfileComponent implements OnInit {
  reports_number = 133;
  following_number = 47;
  followers_number = 103;
  praises_number = 94;
  location = 'China';
  email = 'biohub@mail.ustc.edu.cn';
  organization = 'USTC';
  user_name = 'FrankSalazar';
  follow_or_unfollow = 'follow';
  isVisible = false;
  follow_or_edit = true; // 设定这个按钮是follow还是edit，true时时follow，false时是edit
  constructor() { }
  ngOnInit() {
  }
  followAndUnfollow(): void {
    if (this.follow_or_unfollow === 'follow') {
      this.follow_or_unfollow = 'unfollow';
    } else {
      this.isVisible = true;
    }
  }
  handleOk(): void {
    this.follow_or_unfollow = 'follow';
    this.isVisible = false;
  }
  handleCancel(): void {
    this.isVisible = false;
  }
}
