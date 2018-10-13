import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Archive, Report } from '../../../../Interface/userinfo';
import {ApiResult} from '../../../../Interface/ApiResult';
import {HttpService} from '../../../../http.service';

@Component({
  selector: 'app-detailinfo-byarchive',
  templateUrl: './detailinfo-byarchive.component.html',
  styleUrls: ['./detailinfo-byarchive.component.less']
})
export class DetailinfoByarchiveComponent implements OnInit {
  archive: Archive;
  archive_reports: Report[];
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
}
