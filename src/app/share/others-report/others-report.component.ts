import { Component, OnInit, Input } from '@angular/core';
import { Report } from './others-report';
import {Expandin} from '../report-list-animation';


@Component({
  selector: 'app-others-report',
  templateUrl: './others-report.component.html',
  styleUrls: ['./others-report.component.less'],
  animations: [
    Expandin
  ]
})
export class OthersReportComponent implements OnInit {
  @Input() report: Report;
  @Input() bkcolor: string;
  constructor() { }

  ngOnInit() {
  }

}
