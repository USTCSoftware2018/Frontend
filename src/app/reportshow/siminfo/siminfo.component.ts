import { Component, Input, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-siminfo',
  templateUrl: './siminfo.component.html',
  styleUrls: ['./siminfo.component.less']
})
export class SiminfoComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
