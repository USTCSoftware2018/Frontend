import {Component, Input, OnInit} from '@angular/core';
import {Simuser} from '../../Interface/userinfo';
import {RouterjudgeService} from '../routerjudge.service';
import {HttpService} from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-followuser',
  templateUrl: './followuser.component.html',
  styleUrls: ['./followuser.component.less'],
})
export class FollowuserComponent implements OnInit {
  @Input() otheruser: Simuser;
  @Input() bkcolor: string;

  btncontent: String ;
  isFollow: boolean;
  constructor(
    private routerjudge: RouterjudgeService,
    private http: HttpService,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
    this.btncontent = this.otheruser.followed ? 'follow' : 'unfollow';
    this.isFollow = this.otheruser.followed;
  }
  gotoIndex = () => {
    this.routerjudge.gotoUserIndex(this.otheruser.id);
  }
  // 点击关注
  changeFollow = () => {
    // 点击先直接修改
    const old_follow_bl = this.isFollow;
    const old_follow_msg = this.btncontent;
    this.isFollow = !old_follow_msg;
    this.btncontent = old_follow_bl ? 'unfollow' : 'follow';
    // 回调函数定义
    const follow_callback = (result: ApiResult) => {
      if (!result.success) {
        this.message.error( 'Fail to follow' + this.otheruser.username);
        this.isFollow = old_follow_bl;
        this.btncontent = old_follow_msg;
        console.log('ok');
      }
    };
    const unfollow_callback = (result: ApiResult) => {
      if (!result.success) {
        this.message.error( 'Fail to follow' + this.otheruser.username);
        this.isFollow = old_follow_bl;
        this.btncontent = old_follow_msg;
        console.log('ok');
      }
    };
    // 根据现在是否关注进行请求
    if (!old_follow_msg) {
      this.http.follow_user_by_id(this.otheruser.id, follow_callback);
    } else {
      this.http.unfollow_user_by_id(this.otheruser.id, unfollow_callback);
    }
  }
}
