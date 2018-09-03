import { Component, OnInit, Input } from '@angular/core';
import { ReportStepsHeader } from '../../headers/article';
@Component({
  selector: 'app-editor-field',
  templateUrl: './editor-field.component.html',
  styleUrls: ['./editor-field.component.less']
})
export class EditorFieldComponent implements OnInit {

  @Input() step: ReportStepsHeader;

  constructor() { }

  ngOnInit() {
  }

}
