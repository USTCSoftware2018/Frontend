import { Component, OnInit } from '@angular/core';
import { UserSigninfoService } from '../../../user-signinfo.service';
import { Simuser, User, Assortment} from '../../../Interface/userinfo';
import { USER, SIMUSER, CLASSIFICATION} from '../../../Interface/mock-user';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.less']
})
export class UserinfoComponent implements OnInit {
  user: User = USER;
  simuser: Simuser = SIMUSER;
  classification: Assortment = CLASSIFICATION;
  constructor(private myinfo: UserSigninfoService) {
  }

  ngOnInit() {
    this.simuser = this.myinfo.myInfo;
  }

}
