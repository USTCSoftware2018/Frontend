import { Component, OnInit } from '@angular/core';
import { report1} from '../../Interface/mock-user';
import { UserSigninfoService } from '../../user-signinfo.service';
import {Simuser} from '../../Interface/userinfo';

@Component({
  selector: 'app-my-center-index',
  templateUrl: './my-center-index.component.html',
  styleUrls: ['./my-center-index.component.less']
})
export class MyCenterIndexComponent implements OnInit {
  user: Simuser;
  collections = [report1];
  favorites = [report1];
  constructor( private myinfo: UserSigninfoService) {
    this.user = this.myinfo.myInfo;
    console.log(this.myinfo.myInfo);
  }

  ngOnInit() {
  }

}
