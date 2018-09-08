import { Component, OnInit, Input } from '@angular/core';
import { Report } from './others-report';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {Expandin} from '../report-list-animation';


@Component({
  selector: 'app-others-report',
  templateUrl: './others-report.component.html',
  styleUrls: ['./others-report.component.less'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({height: 0})),
      transition('void => *', [
        style({height: 0}),
        animate(250, style({height: '*'}))
      ])
    ])
  ]
})
export class OthersReportComponent implements OnInit {
  @Input() report: Report;
  @Input() bkcolor: string;
  constructor() { }

  ngOnInit() {
  }

}
