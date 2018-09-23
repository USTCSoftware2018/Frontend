import { Component, Input, OnInit } from '@angular/core';
import {Simuser} from '../../Interface/userinfo';

@Component({
  selector: 'app-siminfo',
  templateUrl: './siminfo.component.html',
  styleUrls: ['./siminfo.component.less']
})
export class SiminfoComponent implements OnInit {
  @Input() user: Simuser;
  @Input() ifmyself: boolean;
  number_router: string;
  constructor() { }

  ngOnInit() {
    // 根据是否是自己设置点击四个字母跳转
    if (this.ifmyself) {
      this.number_router = '/mypersonalcenter/myinfo';
    } else {
      this.number_router = '/profile';
    }
  }

}
