import { Component, OnInit } from '@angular/core';
import { User } from '../../../Interface/userinfo';
import { USER } from '../../../Interface/mock-user';
import { SIMUSER } from '../../../Interface/mock-user';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.less']
})
export class UserinfoComponent implements OnInit {
  user: User = USER;
  simuser = SIMUSER;
  constructor() { }

  ngOnInit() {
  }

}
