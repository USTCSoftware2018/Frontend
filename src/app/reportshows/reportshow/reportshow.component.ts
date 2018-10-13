import {Component, OnInit} from '@angular/core';
import { Simuser, Report, ReportComment } from '../../Interface/userinfo';
import { user1, report1 } from '../../Interface/mock-user';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {UserSigninfoService} from '../../user-signinfo.service';
import { COMMENT} from '../../Interface/mock-user';

@Component({
  selector: 'app-reportshow',
  templateUrl: './reportshow.component.html',
  styleUrls: ['./reportshow.component.less']
})
export class ReportshowComponent implements OnInit {
  report_id: number;
  report_author: Simuser = user1;
  report_sim_info: Report = report1;
  report_comments: ReportComment[] = [COMMENT, COMMENT];
  isLogin: boolean;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userinfo: UserSigninfoService
  ) { }
  ngOnInit() {
    this.report_author = new Simuser();
    this.getReportId();
    this.report_author = this.userinfo.myInfo;
    this.isLogin = this.userinfo.isLogin;
  }
  getReportId = () => {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.report_id = +params.get('report_id');
    });
  }
}
