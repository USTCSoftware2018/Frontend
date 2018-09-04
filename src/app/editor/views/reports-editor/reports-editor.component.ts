import { Component, OnInit } from '@angular/core';
import { EditorReportService } from '../../core/editorReport.service';
import { ReportHeader } from '../../headers/article';
@Component({
  selector: 'app-reports-editor',
  templateUrl: './reports-editor.component.html',
  styleUrls: ['./reports-editor.component.less']
})
export class ReportsEditorComponent implements OnInit {

  currentReport: ReportHeader;
  test: string;

  constructor(public editorReportService: EditorReportService) { }

  ngOnInit() {
    this.editorReportService.initReport();
    this.currentReport = this.editorReportService.report;
    this.editorReportService.parseAll(); // 编译
    console.log(this.currentReport);
  }

}