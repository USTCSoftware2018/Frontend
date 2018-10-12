import { Component, OnInit } from '@angular/core';
import { Simuser } from '../../Interface/userinfo';
import {user1, user2, user3 } from '../../Interface/mock-user';
import {HttpService} from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';

@Component({
  selector: 'app-popular-igemers',
  templateUrl: './popular-igemers.component.html',
  styleUrls: ['./popular-igemers.component.less']
})
export class PopularIgemersComponent implements OnInit {
  igemers: Simuser[];
  constructor(
    private http: HttpService,
  ) { }

  ngOnInit() {
    this.get_popular_iemers();
  }
  get_popular_iemers  = () => {
    const callback = (result: ApiResult) => {
     if (result.success) {
       this.igemers = result.data.results;
     }
    };
    this.http.get_active_users(callback);
  }
}
