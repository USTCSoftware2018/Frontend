import { Component, OnInit } from '@angular/core';
import { report1} from '../../Interface/mock-user';
import { UserSigninfoService } from '../../user-signinfo.service';
import {Simuser, Report} from '../../Interface/userinfo';
import {HttpService} from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';

@Component({
  selector: 'app-my-center-index',
  templateUrl: './my-center-index.component.html',
  styleUrls: ['./my-center-index.component.less']
})
export class MyCenterIndexComponent implements OnInit {
  user: Simuser;
  collections: Report[];
  favorites = [report1];
  constructor(private myinfo: UserSigninfoService,
              private http: HttpService,
              ) {
    this.user = this.myinfo.myInfo;
  }

  ngOnInit() {
  }
  get_collections = () => {
    const callback = (result: ApiResult) => {
      if (result.success) {
        this.collections = result.data.results;
      }
    };
    this.http.get_all_my_collections(callback);
  }
}
