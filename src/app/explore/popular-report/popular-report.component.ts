import { Component, OnInit } from '@angular/core';
import { Report } from '../../Interface/userinfo';
import { report1 } from '../../Interface/mock-user';

@Component({
  selector: 'app-popular-report',
  templateUrl: './popular-report.component.html',
  styleUrls: ['./popular-report.component.less']
})
export class PopularReportComponent implements OnInit {
  reports: Report[] = [report1, report1, report1, report1, report1, report1, report1];
  constructor() { }

  ngOnInit() {
  }

}
