import {Component, Input, OnInit} from '@angular/core';
import {Simuser} from '../../Interface/userinfo';
import {RouterjudgeService} from '../routerjudge.service';

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
  constructor(private routerjudge: RouterjudgeService) { }

  ngOnInit() {
    this.btncontent = this.otheruser.followed ? 'unfollow' : 'follow';
  }
  gotoIndex = () => {
    this.routerjudge.gotoUserIndex(this.otheruser.id);
  }
  changeFollow() {
    this.isFollow = this.isFollow === true ? false : true;
    this.btncontent = this.isFollow ? 'unfollow' : 'follow';
  }
}
