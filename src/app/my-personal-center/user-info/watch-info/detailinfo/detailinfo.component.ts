import { Component, OnInit, Input } from '@angular/core';
import {Simuser, User} from '../../../../Interface/userinfo';
import {USER} from '../../../../Interface/mock-user';

@Component({
  selector: 'app-detailinfo',
  templateUrl: './detailinfo.component.html',
  styleUrls: ['./detailinfo.component.less']
})
export class DetailinfoComponent implements OnInit {
  user: User = USER;
  // store the status of following followers likes anf reports
  constructor() { }

  ngOnInit() {
  }
}
