import {Component, Input, OnInit} from '@angular/core';
import { Report } from './reportshow';
import { REPORTS } from './mock-reports';
import { Socialcomments } from './socialinfo';
import { SOLICIALINFO , SOCIALCOMMENTS } from './mock-Socialinfo';
import { User } from './user';
import { USER} from './mock-user';
import { SiminfoComponent } from './siminfo/siminfo.component';

@Component({
  selector: 'app-reportshow',
  templateUrl: './reporthow.component.html',
  styleUrls: ['./reportshow.component.less']
})
export class ReportComponent implements OnInit {

  reports = REPORTS;
  Report = REPORTS[1];
  socialinfo = SOLICIALINFO;
  socialcomments = SOCIALCOMMENTS;
  user = USER;

  constructor() { }

  ngOnInit() {
  }
}
