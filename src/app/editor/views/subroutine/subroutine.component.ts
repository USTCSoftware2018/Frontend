import { Component, OnInit, Input } from '@angular/core';
import { ReportStepsHeader, ReportSubroutineHeader } from '../../headers/article';

@Component({
  selector: 'app-subroutine',
  templateUrl: './subroutine.component.html',
  styleUrls: ['./subroutine.component.less']
})
export class SubroutineComponent implements OnInit {

  @Input() sub: ReportSubroutineHeader;

  panelStyle: any = {
    'background'   : '#FFFFFF',
    'border-radius': '15px',
    'border-width': '1px',
    'border-style': 'solid',
    'border-color': '#979797',
  };

  constructor() { }

  ngOnInit() {
  }

}
