import { Component, OnInit } from '@angular/core';
import {Report, User} from '../../../Interface/userinfo';
import {USER} from '../../../Interface/mock-user';
import {ActivatedRoute} from '@angular/router';
import {ParamMap} from '@angular/router';

@Component({
  selector: 'app-watch-report-label',
  templateUrl: './watch-report-label.component.html',
  styleUrls: ['./watch-report-label.component.less']
})
export class WatchReportLabelComponent implements OnInit {
  user: User = USER;
  label: string; // 要展示的哪种标签的report
  reports_onshow = [];
  reports_unshow = [];
  i = 0;
  t: Report;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.label = params.get('name');
    });
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
