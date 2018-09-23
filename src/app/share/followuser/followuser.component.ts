import {Component, Input, OnInit} from '@angular/core';
import {Simuser} from '../../Interface/userinfo';

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
  constructor() { }

  ngOnInit() {
    this.btncontent = this.otheruser.followed ? 'unfollow' : 'follow';
  }
  changeFollow() {
    this.isFollow = this.isFollow === true ? false : true;
    this.btncontent = this.isFollow ? 'unfollow' : 'follow';
  }
}
