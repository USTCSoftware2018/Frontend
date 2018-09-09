import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

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
    ])
  ]
})
export class ButtonAreaComponent implements OnInit {

  flag: string;
  constructor() { }

  ngOnInit() {
  }

  clickButton() {
    this.flag = this.flag === 'active' ? 'inactive' : 'active';
  }

}
