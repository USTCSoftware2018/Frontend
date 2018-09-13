import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

import {AppendixService} from '../../core/appendix.service';
@Component({
  selector: 'app-button-area',
  templateUrl: './button-area.component.html',
  styleUrls: ['./button-area.component.less'],
  animations: [
    trigger('change', [
      state('inactive', style({top: '80%', opacity: 0, display: 'none'})),
      state('active',   style({opacity: 1, display: 'block'})),
      transition('inactive => active', animate('300ms ease')),
      transition('active => inactive', animate('300ms ease'))
    ]),
    trigger('change_r', [
      state('inactive', style({opacity: 1, display: 'block'})),
      state('active',   style({top: '80%', opacity: 0, display: 'none'})),
      transition('inactive => active', animate('300ms ease')),
      transition('active => inactive', animate('300ms ease'))
    ]),
    trigger('change_c', [
      state('inactive', style({background: '#C5E5E8'})),
      state('active',   style({background: '#89AFE7'})),
      transition('inactive => active', animate('300ms ease')),
      transition('active => inactive', animate('300ms ease'))
    ])
  ]
})
export class ButtonAreaComponent implements OnInit {

  flag: string;
  constructor(public append: AppendixService) { }

  ngOnInit() {
    this.flag = 'inactive';
  }

  clickButton() {
    this.flag = this.flag === 'active' ? 'inactive' : 'active';
  }

}
