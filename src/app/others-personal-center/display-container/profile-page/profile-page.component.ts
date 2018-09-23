import { Component, OnInit } from '@angular/core';
import { Simuser, Assortment } from '../../../Interface/userinfo';
import {SIMUSER, CLASSIFICATION} from '../../../Interface/mock-user';
import {HttpService} from '../../../http.service';
import {ApiResult} from '../../../Interface/ApiResult';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit {
  user: Assortment = CLASSIFICATION;
  simuser: Simuser;
  yinyinyin: any;
  id: any;
  constructor(private http: HttpService) { }
  ngOnInit() {
    this.InitProfile();
  }
  InitProfile() {
    const __this = this;
    const callback = function(result: ApiResult) {
      __this.simuser = result.data;
    };
    this.http.get_user_by_id(1, callback);
  }
}
