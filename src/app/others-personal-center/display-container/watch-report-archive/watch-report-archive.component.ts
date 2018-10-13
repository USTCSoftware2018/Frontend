import { Component, OnInit } from '@angular/core';
import {Archive, Report, User} from '../../../Interface/userinfo';
import {USER} from '../../../Interface/mock-user';
import {ActivatedRoute} from '@angular/router';
import {ParamMap} from '@angular/router';
import {ApiResult} from '../../../Interface/ApiResult';
import {HttpService} from '../../../http.service';

@Component({
  selector: 'app-watch-report-archive',
  templateUrl: './watch-report-archive.component.html',
  styleUrls: ['./watch-report-archive.component.less']
})
export class WatchReportArchiveComponent implements OnInit {
  user: User = USER;
  archive: Archive;
  archive_reports: Report[];
  reports_onshow = [];
  reports_unshow = [];
  i = 0;
  t: Report;
  constructor(
    private route: ActivatedRoute,
    private http: HttpService
    ) { }
  ngOnInit() {
    this.archive = new Archive();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.archive.id = +params.get('archive_id');
    });
    this.get_archive_reports();
  }
  get_archive_reports() {
    const archive_callback = (result: ApiResult) => {
      if (result.success) {
        this.archive_reports = result.data.reports;
        this.archive.date = result.data.date;
      }
    };
    this.http.query_archive(this.archive.id, archive_callback);
  }
  // reportShowMore() {
  //   this.reports_unshow.reverse();
  //   for ( this.i = 0; this.i < this.reports_unshow.length && this.i < 6; ++this.i) {
  //     this.t = this.reports_unshow.pop();
  //     this.reports_onshow.push(this.t);
  //   }
  //   this.i = 0;
  //   this.reports_unshow.reverse();
  // }
  //
  // initReports(): void {
  //
  //   if (this.user.reports.length <= 6) {
  //     this.reports_onshow = this.user.reports.slice(0, this.user.reports.length);
  //   } else {
  //     this.reports_onshow = this.user.reports.slice(0, 6);
  //     this.reports_unshow = this.user.reports.slice(6, this.user.reports.length);
  //   }
  // }
}
