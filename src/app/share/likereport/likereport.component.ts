import {Component, Input, OnInit} from '@angular/core';
import { Like } from '../../Interface/userinfo';
import {RouterjudgeService} from '../routerjudge.service';

@Component({
  selector: 'app-likereport',
  templateUrl: './likereport.component.html',
  styleUrls: ['./likereport.component.less'],
})
export class LikereportComponent implements OnInit {
  @Input() like: Like;
  @Input() bkcolor: string;
  constructor(private routerjudge: RouterjudgeService) { }

  ngOnInit() {
  }
  gotoIndex = () => {
    this.routerjudge.gotoUserIndex(this.like.ouser.id);
  }
  gotoLabel = (label_id: number) => {
    this.routerjudge.gotoReportbyLabel(this.like.report.author.id, label_id);
  }
}
