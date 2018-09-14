import {Component, Input, OnInit} from '@angular/core';
import {UserInfoProfile} from './userinfoprofile';
import {USERINFOPROFILE} from './mock-userinfoprofile';
import {Simuser} from '../../Interface/userinfo';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.less']
})
export class PersonalInformationComponent implements OnInit {
  @Input() userinfo;  //这是左上角的数据
  @Input() userinfo2; //这是左下角的数据
  constructor() { }

  ngOnInit() {
  }

}
