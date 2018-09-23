import { Component, OnInit, Input } from '@angular/core';
import { Report } from '../../Interface/userinfo';
import {RouterjudgeService} from '../routerjudge.service';


@Component({
  selector: 'app-others-report',
  templateUrl: './others-report.component.html',
  styleUrls: ['./others-report.component.less'],
})
export class OthersReportComponent implements OnInit {
  @Input() report: Report;
  @Input() bkcolor: string;
  constructor(private routerjudge: RouterjudgeService) { }

  ngOnInit() {
  }
  gotoIndex = () => {
    this.routerjudge.gotoUserIndex(this.report.author.id);
  }
  gotoLabel = (name: string) => {
    this.routerjudge.gotoReportbyLabel(this.report.author.id, name);
  }
}
