import { Component, OnInit, Input} from '@angular/core';
import { Report } from '../../Interface/userinfo';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.less']
})
export class ReportCardComponent implements OnInit {
  @Input() report: Report;

  constructor() { }

  ngOnInit() {
  }

}
