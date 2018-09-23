import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.less']
})
export class PersonalInformationComponent implements OnInit {
  @Input() userinfo;  // 这是左上角的数据
  @Input() classification; // 这是左下角的数据
  constructor() { }

  ngOnInit() {
  }

}
