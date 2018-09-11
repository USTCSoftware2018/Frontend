import {Component, Input, OnInit} from '@angular/core';
import {Otheruser} from '../likereport/likereport';

@Component({
  selector: 'app-followuser',
  templateUrl: './followuser.component.html',
  styleUrls: ['./followuser.component.less'],
})
export class FollowuserComponent implements OnInit {
  @Input() otheruser: Otheruser;
  @Input() isFollowing: Boolean;
  @Input() bkcolor: string;
  btncontent: String ;
  constructor() { }

  ngOnInit() {
    this.btncontent = this.isFollowing ? 'unfollow' : 'follow';
  }
  changeFollow() {
    this.isFollowing = this.isFollowing === true ? false : true;
    this.btncontent = this.isFollowing ? 'unfollow' : 'follow';
  }
}
