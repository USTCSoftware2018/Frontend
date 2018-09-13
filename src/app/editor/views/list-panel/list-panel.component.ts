import { Component, OnInit, Input } from '@angular/core';
import { ReportSubroutineHeader,ReportListHeader } from '../../headers/article';

@Component({
  selector: 'app-list-panel',
  templateUrl: './list-panel.component.html',
  styleUrls: ['./list-panel.component.less']
})
export class ListPanelComponent implements OnInit {

  constructor() { }
  @Input() sub: ReportSubroutineHeader;

  ngOnInit() {
    if (this.sub.list === undefined ) {
      this.sub.list =  new Array<ReportListHeader>();
    }
    const  _tmp = new ReportListHeader();
    this.sub.list.push(_tmp);
  }

  pushList() {
    if (this.sub.list === undefined ) {
      this.sub.list =  new Array<ReportListHeader>();
    }
    const  _tmp = new ReportListHeader();
    this.sub.list.push(_tmp);
  }

  delList(idx: number) {
    if (idx >= 0 && idx < this.sub.list.length) {
      this.sub.list.splice(idx, 1);
    }
  }

}
