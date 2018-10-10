import {Component, Input, OnInit} from '@angular/core';
import { Simuser, Assortment } from '../../../Interface/userinfo';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.less']
})
export class PersonalInformationComponent implements OnInit {
  @Input() userinfo: Simuser;  // 这是左上角的simuser数据
  @Input() classification: Assortment; // 这是左下角的分类数据
  constructor() { }

  ngOnInit() {
  }

}
