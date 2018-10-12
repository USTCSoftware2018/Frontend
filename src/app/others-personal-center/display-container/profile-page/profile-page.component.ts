import {Component, OnInit} from '@angular/core';
import {Simuser, Archive, Label, Report} from '../../../Interface/userinfo';
import { HttpService } from '../../../http.service';
import { ApiResult } from '../../../Interface/ApiResult';
import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit {
  labels: Label[];
  archive: Archive[];
  popular_reports: Report[] = [];
  simuser: Simuser;
  user_id: number;
  constructor(
    private http: HttpService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.simuser = new Simuser();
    this.getid();
    this.InitProfile();
    this.get_classification();
  }
  getid = () => {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.user_id = +params.get('user_id');
    });
  }
  InitProfile = () => {
    const user_id = this.user_id
    const callback = (result: ApiResult) => {
      if (result.success) {
        this.simuser = result.data;
        this.simuser.stat = result.data.stat;
        console.log(this.simuser);
      }
    };
    this.http.get_user_by_id(user_id, callback);
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
