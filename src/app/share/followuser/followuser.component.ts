import {Component, Input, OnInit} from '@angular/core';
import {Otheruser} from '../likereport/likereport';
import {Expandin} from '../report-list-animation';

@Component({
  selector: 'app-followuser',
  templateUrl: './followuser.component.html',
  styleUrls: ['./followuser.component.less'],
  animations: [
    Expandin
  ]
})
export class FollowuserComponent implements OnInit {
  @Input() otheruser: Otheruser;
  @Input() isFollowing: Boolean;
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
