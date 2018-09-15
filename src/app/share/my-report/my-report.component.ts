import { Component, OnInit, Input } from '@angular/core';
import { Report } from '../../Interface/userinfo';


@Component({
  selector: 'app-my-report',
  templateUrl: './my-report.component.html',
  styleUrls: ['./my-report.component.less'],
})
export class MyReportComponent implements OnInit {
  @Input() report: Report;
  @Input() bkcolor: string;
  constructor() { }

  ngOnInit() {
  }

}
