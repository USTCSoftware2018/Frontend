import { Component, OnInit } from '@angular/core';
import { Simuser, Assortment } from '../../../Interface/userinfo';
import { CLASSIFICATION } from '../../../Interface/mock-user';
import { HttpService } from '../../../http.service';
import {UserSigninfoService} from '../../../user-signinfo.service';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.less']
})
export class UserinfoComponent implements OnInit {
  simuser: Simuser;
  classification: Assortment = CLASSIFICATION;
  constructor(
    private http: HttpService,
    private userinfo: UserSigninfoService
  ) {
  }

  ngOnInit() {
    this.simuser = this.userinfo.myInfo;
    // this.http get classification;
  }
}
