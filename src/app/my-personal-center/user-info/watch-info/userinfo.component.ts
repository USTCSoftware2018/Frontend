import {Component, OnInit} from '@angular/core';
import {Simuser, Label, Archive, Report} from '../../../Interface/userinfo';
import { HttpService } from '../../../http.service';
import {UserSigninfoService} from '../../../user-signinfo.service';
import {ApiResult} from '../../../Interface/ApiResult';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.less']
})
export class UserinfoComponent implements OnInit {
  simuser: Simuser;
  labels: Label[];
  archive: Archive[];
  popular_reports: Report[] = [];
  constructor(
    private http: HttpService,
    private userinfo: UserSigninfoService
  ) {
  }

  ngOnInit() {
    this.simuser = this.userinfo.myInfo;
    this.get_classification();
  }
  get_classification = () => {
    const callback_labels = (result: ApiResult) => {
      if (result.success) {
        this.labels = result.data;
      }
    };
    const callback_archive = (result: ApiResult) => {
      if (result.success) {
        this.archive = result.data;
      }
    };
    this.http.get_labels_by_user_id(this.simuser.id, callback_labels);
    this.http.get_archives_by_user_id(this.simuser.id, callback_archive);
  }
}
