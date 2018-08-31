import {Component, Input, OnInit} from '@angular/core';
import { Report } from './report';
import { REPORTS } from './mock-reports';
import { Socialcomments } from './socialinfo';
import { SOLICIALINFO , SOCIALCOMMENTS } from './mock-Socialinfo';
import { User } from './user';
import { USER} from './mock-user';
import { SiminfoComponent } from '../siminfo/siminfo.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less']
})
export class Report1Component implements OnInit {

  reports = REPORTS;
  Report = REPORTS[1];
  socialinfo = SOLICIALINFO;
  socialcomments = SOCIALCOMMENTS;
  user = USER;

  constructor() { }

  ngOnInit() {
  }
}
