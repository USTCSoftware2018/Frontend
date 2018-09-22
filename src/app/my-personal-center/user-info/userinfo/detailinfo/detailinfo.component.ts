import { Component, OnInit, Input } from '@angular/core';
import {Simuser, User} from '../../../../Interface/userinfo';

@Component({
  selector: 'app-detailinfo',
  templateUrl: './detailinfo.component.html',
  styleUrls: ['./detailinfo.component.less']
})
export class DetailinfoComponent implements OnInit {
  @Input() user: User;
  // store the status of following followers likes anf reports
  constructor() { }

  ngOnInit() {
  }
  ifFollowing(otheruser: Simuser) {
    const ii = this.user.following.content.findIndex(function(value) {
      return value.id === otheruser.id;
    });
    if (ii === -1) {
      console.log('no');
      return false;
    } else {
      console.log('yes');
      return true;
    }
  }
}
