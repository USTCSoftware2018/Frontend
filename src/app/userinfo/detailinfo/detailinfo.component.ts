import { Component, OnInit, Input } from '@angular/core';
import {Otheruser, User} from '../user';

@Component({
  selector: 'app-detailinfo',
  templateUrl: './detailinfo.component.html',
  styleUrls: ['./detailinfo.component.less']
})
export class DetailinfoComponent implements OnInit {
  @Input() user: User;
  // store the status of following followers likes anf reports
  router = [false, false, false, true];
  constructor() { }

  ngOnInit() {
  }
  chshow(clk: String) {
    if (clk === 'Following') {
         for (let ii = 0; ii < 4; ii++) {
            if (ii !== 0) {
              this.router[ii] = false;
            } else {
              this.router[ii] = true;
            }
          }
    } else if (clk === 'Followers') {
        for (let ii = 0; ii < 4; ii++) {
          if (ii !== 1) {
            this.router[ii] = false;
          } else {
            this.router[ii] = true;
          }
        }
    } else if (clk === 'Likes') {
        for (let ii = 0; ii < 4; ii++) {
          if (ii !== 2) {
            this.router[ii] = false;
          } else {
            this.router[ii] = true;
          }
        }
    } else if (clk === 'Reports') {
        for (let ii = 0; ii < 4; ii++) {
          if (ii !== 3) {
            this.router[ii] = false;
          } else {
            this.router[ii] = true;
          }
        }
    }
  }
  ifFollowing(otheruser: Otheruser) {
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
