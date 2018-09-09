import { Component, Input, OnInit } from '@angular/core';
import { UserInfoProfile} from "./user-info-profile";

@Component({
  selector: 'app-user-info-profile',
  templateUrl: './user-info-profile.component.html',
  styleUrls: ['./user-info-profile.component.less']
})
export class UserInfoProfileComponent implements OnInit {
  @Input() userinfoprofile: UserInfoProfile;
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
  constructor() { }
  ngOnInit() {
  }
  followAndUnfollow(): void {
    if (this.userinfoprofile.follow_or_unfollow === 'follow') {
      this.userinfoprofile.follow_or_unfollow = 'unfollow';
    } else {
      this.userinfoprofile.isVisible = true;
    }
  }
  handleOk(): void {
    this.userinfoprofile.follow_or_unfollow = 'follow';
    this.userinfoprofile.isVisible = false;
  }
  handleCancel(): void {
    this.userinfoprofile.isVisible = false;
  }
}
