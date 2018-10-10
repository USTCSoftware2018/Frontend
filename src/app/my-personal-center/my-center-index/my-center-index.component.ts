import { Component, OnInit } from '@angular/core';
import { report1} from '../../Interface/mock-user';
import { UserSigninfoService } from '../../user-signinfo.service';
import {Simuser} from '../../Interface/userinfo';
import {HttpService} from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';

@Component({
  selector: 'app-my-center-index',
  templateUrl: './my-center-index.component.html',
  styleUrls: ['./my-center-index.component.less']
})
export class MyCenterIndexComponent implements OnInit {
  user: Simuser;
  collections = [report1];
  favorites = [report1];
  constructor(private myinfo: UserSigninfoService,
              private http: HttpService,
              ) {
    this.user = this.myinfo.myInfo;
  }

  ngOnInit() {
  }

}
