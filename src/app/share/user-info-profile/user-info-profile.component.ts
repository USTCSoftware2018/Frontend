import { Component, Input, OnInit } from '@angular/core';
/*import { UserInfoProfile} from "./user-info-profile";*/
import {Simuser} from "../../Interface/userinfo";

@Component({
  selector: 'app-user-info-profile',
  templateUrl: './user-info-profile.component.html',
  styleUrls: ['./user-info-profile.component.less']
})
export class UserInfoProfileComponent implements OnInit {
  @Input() userinfoprofile: Simuser;
  /*
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
  */
  follow_and_unfollow: string;
  constructor() { }
  ngOnInit() {
    this.followAndUnFollow();
  }
  followAndUnFollow(): void {
    if (this.userinfoprofile.follow_or_unfollow) {
      this.follow_and_unfollow = 'unfollow';
      this.userinfoprofile.follow_or_unfollow = false;
    } else {
      this.follow_and_unfollow = 'follow';
      this.userinfoprofile.follow_or_unfollow = true;
    }
  }
  /*
  handleOk(): void {
    this.userinfoprofile.follow_or_unfollow = 'follow';
    this.userinfoprofile.isVisible = false;
  }
  handleCancel(): void {
    this.userinfoprofile.isVisible = false;
  }
  */
}
