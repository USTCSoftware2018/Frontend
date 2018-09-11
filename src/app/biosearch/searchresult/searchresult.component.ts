import { Component, OnInit } from '@angular/core';
import { USER } from '../../Interface/mock-user';
import { Simuser } from '../../Interface/userinfo';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.less']
})
export class SearchresultComponent implements OnInit {
  users: Simuser[];
  reports = USER.reports;
  loading: boolean;
  constructor() {
  }

  ngOnInit() {
    this.users = USER.followers.content;
  }
  startloading() {
    this.loading = true;
  }
  endloading() {
    this.loading = true;
  }
}
