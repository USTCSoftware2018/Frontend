import { Component, OnInit, Input } from '@angular/core';
import { Report } from './others-report';


@Component({
  selector: 'app-others-report',
  templateUrl: './others-report.component.html',
  styleUrls: ['./others-report.component.less'],
})
export class OthersReportComponent implements OnInit {
  @Input() report: Report;
  @Input() bkcolor: string;
  constructor() { }

  ngOnInit() {
  }

}
