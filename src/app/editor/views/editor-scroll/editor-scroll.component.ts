import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { EditorReportService } from '../../core/editorReport.service';

@Component({
  selector: 'app-editor-scroll',
  templateUrl: './editor-scroll.component.html',
  styleUrls: ['./editor-scroll.component.less']
})
export class EditorScrollComponent implements OnInit, OnChanges, DoCheck {

  constructor(public editor: EditorReportService) { }

  public iconsList: string[];

  ngOnInit() {
  }

  ngOnChanges() {
  }

  ngDoCheck() {
    this.iconsList = [];
    for (const sub of this.editor.report.subroutines) {
      for (const step of sub.steps) {
        this.iconsList.push(step.ico);
      }
    }
  }

}
