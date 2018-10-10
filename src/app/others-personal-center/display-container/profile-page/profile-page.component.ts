import { Component, OnInit } from '@angular/core';
import { Simuser, Assortment } from '../../../Interface/userinfo';
import {CLASSIFICATION} from '../../../Interface/mock-user';
import { HttpService } from '../../../http.service';
import { ApiResult } from '../../../Interface/ApiResult';
import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit {
  classification: Assortment = CLASSIFICATION;
  simuser: Simuser;
  user_id: number;
  constructor(
    private http: HttpService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.simuser = new Simuser();
    this.getid();
    this.InitProfile();
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
}
