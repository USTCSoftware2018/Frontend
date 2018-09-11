import { Component, OnInit } from '@angular/core';
import {UserInfoProfile} from './userinfoprofile';
import {USERINFOPROFILE} from './mock-userinfoprofile';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.less']
})
export class PersonalInformationComponent implements OnInit {
  userinfo: UserInfoProfile = USERINFOPROFILE;
  constructor() { }

  ngOnInit() {
  }

}
