import { Component, OnInit, Input } from '@angular/core';
import { ReportSubroutineHeader } from '../../headers/article';

@Component({
  selector: 'app-remark-panel',
  templateUrl: './remark-panel.component.html',
  styleUrls: ['./remark-panel.component.less']
})
export class RemarkPanelComponent implements OnInit {

  @Input() sub: ReportSubroutineHeader;
  constructor() { }

  ngOnInit() {
  }

}
