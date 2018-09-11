import {Component, Input, OnInit} from '@angular/core';
import {Report} from "../../Interface/userinfo";
import {ReportServiceService} from '../report-service.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import {User} from "../../Interface/userinfo";


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
  @Input() user: User;
  reports_onshow=[];
  reports_unshow=[];
  i = 0;
  t: Report;

  constructor(private reportService: ReportServiceService) { }
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

}
