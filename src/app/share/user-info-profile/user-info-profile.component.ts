import { Component, Input, OnInit } from '@angular/core';
import {Simuser} from '../../Interface/userinfo';
import { UserInfoProfile } from '../../others-personal-center/display-container/personal-information/userinfoprofile';
import {RouterjudgeService} from '../routerjudge.service';

@Component({
  selector: 'app-user-info-profile',
  templateUrl: './user-info-profile.component.html',
  styleUrls: ['./user-info-profile.component.less']
})
export class UserInfoProfileComponent implements OnInit {
  @Input() user: Simuser;
  @Input() ifmyself: boolean;
  ifFollow: boolean;
  follow_or_unfollow: string;
  constructor(private routerjudge: RouterjudgeService) { }
  ngOnInit() {
    this.followAndUnFollow();
  }
  followAndUnFollow(): void {
    if (this.follow_or_unfollow) {
      this.follow_or_unfollow = 'unfollow';
      this.ifFollow = false;
    } else {
      this.follow_or_unfollow = 'follow';
      this.ifFollow = true;
    this.ifFollow = this.user.ifFollow;
    this.ifFollow = this.user.followed;
    this.follow_or_unfollow = this.ifFollow ? 'Follow' : 'Unfollow';
    // 根据是否是自己设置点击四个字母跳转
  }
  gotoIndex = () => {
    this.routerjudge.gotoUserIndex(this.user.id);
  }
  gotoDetailInfo = () => {
    this.routerjudge.gotoUserDetailInfo(this.user.id);
  }
  toggleFollow() {
    this.ifFollow = !this.ifFollow;
    this.follow_or_unfollow = this.ifFollow ? 'Follow' : 'Unfollow';
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
