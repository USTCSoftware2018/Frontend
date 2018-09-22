import { Component, OnInit } from '@angular/core';
import {Report, User} from '../../Interface/userinfo';
import {USER} from '../../Interface/mock-user';
import {ActivatedRoute} from '@angular/router';
import {ParamMap} from '@angular/router';

@Component({
  selector: 'app-watch-report-by-label',
  templateUrl: './watch-report-by-label.component.html',
  styleUrls: ['./watch-report-by-label.component.less']
})
export class WatchReportByLabelComponent implements OnInit {
  user: User = USER;
  big_label: string;
  label: string; // 要展示的哪种归档的report
  reports_onshow = [];
  reports_unshow = [];
  i = 0;
  t: Report;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
        if ( params.get('name') != null) {
          this.label = params.get('name');
          this.big_label = 'Report';
        } else {
          this.label = params.get('data');
          this.big_label = 'Archive';
        }
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
