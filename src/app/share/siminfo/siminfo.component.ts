import { Component, Input, OnInit } from '@angular/core';
import {Simuser} from './siminfo';

@Component({
  selector: 'app-siminfo',
  templateUrl: './siminfo.component.html',
  styleUrls: ['./siminfo.component.less']
})
export class SiminfoComponent implements OnInit {
  @Input() user: Simuser;
  constructor() { }

  ngOnInit() {
  }

}
