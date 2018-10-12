import { Component, OnInit } from '@angular/core';
import { Simuser, Assortment } from '../../../Interface/userinfo';
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
  classification: Assortment;
  constructor(
    private http: HttpService,
    private userinfo: UserSigninfoService
  ) {
  }

  ngOnInit() {
    this.simuser = this.userinfo.myInfo;
  }
}
