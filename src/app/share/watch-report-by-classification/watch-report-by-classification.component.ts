import { Component, Input, OnInit } from '@angular/core';
import {Report, User} from '../../Interface/userinfo';
import {USER} from '../../Interface/mock-user';

@Component({
  selector: 'app-watch-report-by-classification',
  templateUrl: './watch-report-by-classification.component.html',
  styleUrls: ['./watch-report-by-classification.component.less']
})
export class WatchReportByClassificationComponent implements OnInit {
  user: User = USER;
  @Input() big_label: string;
  @Input() label: string; // 要展示的哪种归档的report
  reports_onshow = [];
  reports_unshow = [];
  i = 0;
  t: Report;
  constructor() { }
  ngOnInit() {
  }
  reportShowMore() {
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
}
