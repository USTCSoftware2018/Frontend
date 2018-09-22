import { Component, OnInit } from '@angular/core';
import { User } from '../../Interface/userinfo';
import { USER } from '../../Interface/mock-user';
import { SIMUSER } from '../../Interface/mock-user';
import {HttpService} from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit {
  user: User = USER;
  simuser = SIMUSER;
  yinyinyin: any;
  id: any;
  constructor(private http: HttpService) { }
  ngOnInit() {
    this.InitProfile();
  }
  InitProfile() {
    const __this = this;
    const callback = function(result: ApiResult) {
      __this.simuser.name = result.data.username;
      __this.simuser.location = result.data.location;
      __this.simuser.email = result.data.email;
      __this.simuser.organization = result.data.organization;
      __this.simuser.avatar_url = result.data.avatar_url;
    };
    this.http.get_user_by_id(1, callback);
  }
}
