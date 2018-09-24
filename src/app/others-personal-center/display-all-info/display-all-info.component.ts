import {Component, OnInit} from '@angular/core';
import {Report, Simuser} from '../../Interface/userinfo';
import {USER} from '../../Interface/mock-user';

import {User} from '../../Interface/userinfo';


@Component({
  selector: 'app-display-all-info',
  templateUrl: './display-all-info.component.html',
  styleUrls: ['./display-all-info.component.less'],

})
export class DisplayAllInfoComponent implements OnInit {
  user: User = USER;
  reports_onshow = [];
  reports_unshow = [];
  i = 0;
  t: Report;

  constructor() { }
  ngOnInit() {
     this.initReports();
  }

  reportShowMore() {

    console.log(this.reports_unshow.length);
    this.reports_unshow.reverse();
    for ( this.i = 0; this.i < this.reports_unshow.length && this.i < 6; ++this.i) {
      this.t = this.reports_unshow.pop();
      this.reports_onshow.push(this.t);
    }
    this.i = 0;
    this.reports_unshow.reverse();
  }

  initReports(): void {


    if (this.user.reports.length <= 6) {
      this.reports_onshow = this.user.reports.slice(0, this.user.reports.length);
    } else {
      this.reports_onshow = this.user.reports.slice(0, 6);
      this.reports_unshow = this.user.reports.slice(6, this.user.reports.length);
    }
  }
  ifFollowing(otheruser: Simuser) {
    const ii = this.user.following.findIndex(function(value) {
      return value.id === otheruser.id;
    });
    if (ii === -1) {
      return false;
    } else {
      return true;
    }
  }

}
