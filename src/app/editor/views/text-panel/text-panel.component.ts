import { Component, OnInit, Input } from '@angular/core';
import { ReportSubroutineHeader } from '../../headers/article';

@Component({
  selector: 'app-text-panel',
  templateUrl: './text-panel.component.html',
  styleUrls: ['./text-panel.component.less']
})
export class TextPanelComponent implements OnInit {

  @Input() sub: ReportSubroutineHeader;
  constructor() { }

  ngOnInit() {
  }

}
