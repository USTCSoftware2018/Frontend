import { Component, OnInit } from '@angular/core';
import { ReportHeader } from '../../headers/article';
import { EditorReportService } from '../../core/editorReport.service';



@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.less']
})
export class EditAreaComponent implements OnInit {

  editorHeight: string; // 判断高度
  currentReport: ReportHeader;

  constructor(public editorReportService: EditorReportService) { }

  ngOnInit() {
    this.onResize();
    this.editorReportService.initReport();
    this.currentReport = this.editorReportService.report;
    this.editorReportService.parseAll(); // 编译
  }

  public onResize() {
    // 更新大小
    this.editorHeight = (window.innerHeight - 110) + 'px'; // raw 110
  }

}
