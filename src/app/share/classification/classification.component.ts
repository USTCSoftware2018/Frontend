import {Component, Input, OnInit} from '@angular/core';
import { Assortment } from '../../Interface/userinfo';
import {Archive} from '../../Interface/userinfo';
import {PopularReport} from '../../Interface/userinfo';
import {Label} from '../../Interface/userinfo';
import {RouterjudgeService} from '../routerjudge.service';
import {HttpService} from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.less']
})
export class ClassificationComponent implements OnInit {
  @Input() userid: number;
  all_archive: Archive[] = [];
  all_labels: Label[];
  all_pop_report: PopularReport[] = [];
  constructor(
    private routerjudge: RouterjudgeService,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.get_labels();
  }
  get_labels = () => {
    const callback = (result: ApiResult) => {
      if (result.success) {
        this.all_labels = result.data;
      }
    };
    this.http.get_labels_by_user_id(this.userid, callback);
  }
  gotoArchive = ( archive_id: number) => {
    this.routerjudge.gotoReportbyArchive(this.userid, archive_id);
  }
  gotoLabel = (label_id: number) => {
    this.routerjudge.gotoReportbyLabel(this.userid, label_id);
  }
}
