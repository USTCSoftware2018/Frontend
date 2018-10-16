import {ApplicationInitStatus, Component, OnInit} from '@angular/core';
import { Simuser, Report, ReportComment } from '../../Interface/userinfo';
import { user1, report1 } from '../../Interface/mock-user';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {UserSigninfoService} from '../../user-signinfo.service';
import { COMMENT} from '../../Interface/mock-user';
import {EventService} from '../../editor/report-render/event.service';
import {HttpService} from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';

@Component({
  selector: 'app-reportshowother',
  templateUrl: './reportshowother.component.html',
  styleUrls: ['./reportshowother.component.less']
})
export class ReportshowotherComponent implements OnInit {
  report_id: number;
  me: Simuser;
  report: Report = report1;
  report_comments: ReportComment[] = [COMMENT, COMMENT];
  isLogin: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userinfo: UserSigninfoService,
    private dowload_report: EventService,
    private http: HttpService,
  ) { }

  ngOnInit() {
    this.getReportId();
    this.isLogin = this.userinfo.isLogin;
    this.me = this.userinfo.myInfo;
  }
  getReportId = () => {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.report_id = +params.get('report_id');
    });
  }
  downloadReport = () => {
    this.dowload_report.downloadEvent.emit(0);
  }
}
