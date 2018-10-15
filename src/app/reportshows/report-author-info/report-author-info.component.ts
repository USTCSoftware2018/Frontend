import { Component, OnInit, Input } from '@angular/core';
import { Simuser, Report } from '../../Interface/userinfo';

@Component({
  selector: 'app-report-author-info',
  templateUrl: './report-author-info.component.html',
  styleUrls: ['./report-author-info.component.less']
})
export class ReportAuthorInfoComponent implements OnInit {
  @Input() user: Simuser;
  @Input() report: Report;
  @Input() isMyself: boolean;
  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
