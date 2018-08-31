import { Component, OnInit } from '@angular/core';
import {Report} from '../report';
import {ReportServiceService} from '../report-service.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-report1',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({height: 0})),
      transition('void => *', [
        style({height: 0}),
        animate(250, style({height: '*'}))
      ])
    ])
  ]

})
export class Report2Component implements OnInit {
  reports: Report[] = [];
  reports_onshow: Report[] = [];
  reports_unshow: Report[] = [];
  i = 0;
  t: Report;
  constructor(private reportService: ReportServiceService) { }
  ngOnInit() {
    this.getReports();
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
  getReports(): void {
    this.reports = this.reportService.getReports();
    console.log(this.reports);
    if (this.reports.length <= 6) {
      this.reports_onshow = this.reports.slice(0, this.reports.length);
    } else {
      this.reports_onshow = this.reports.slice(0, 6);
      this.reports_unshow = this.reports.slice(6, this.reports.length);
    }
  }
}
