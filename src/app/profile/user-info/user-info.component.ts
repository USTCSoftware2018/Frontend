import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {
  lebels:string[];
  archive:string[];
  popular_reports:string[];
  constructor() { }

  ngOnInit() {
  }

}
