import { Component, OnInit } from '@angular/core';
import { Report } from '../../Interface/userinfo';
import { report1 } from '../../Interface/mock-user';
import {HttpService} from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';

@Component({
  selector: 'app-popular-report',
  templateUrl: './popular-report.component.html',
  styleUrls: ['./popular-report.component.less']
})
export class PopularReportComponent implements OnInit {
  reports: Report[];
  constructor(
    private http: HttpService,
    ) { }

  ngOnInit() {
    this.getPopularReports();
  }

  private getPopularReports = () => {
    const callback = (result: ApiResult) => {
      if (result.success) {
        this.reports = result.data.results;
      }
      console.log(result)
    };
    this.http.get_popular_reports_by_system(callback);
  }
}
