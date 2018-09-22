import { Component, OnInit,  ElementRef, ViewChild, OnChanges  } from '@angular/core';
import { ReportHeader } from '../../headers/article';
import { EditorReportService } from '../../core/editorReport.service';
import { SortablejsOptions } from '../../angular-sortablejs/src/sortablejs-options';

import { EditorEventService } from '../../core/editor-event.service';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';



@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.less'],
})
export class EditAreaComponent implements OnInit, OnChanges {

  editorHeight: string; // 判断高度
  currentReport: ReportHeader;
  flag: string;

  @ViewChild('scrolss') scroll: ElementRef;

  options: SortablejsOptions = {
    handle: '.subroutineTitlePart',
  };

  constructor(public editorReportService: EditorReportService,
              public event: EditorEventService,
              public element: ElementRef) { }

  ngOnChanges() {
  }

  ngOnInit() {
    this.onResize();
    this.flag = 'inactive';
    this.editorReportService.initReport();
    // this.editorReportService.loadReport(new ReportHeader());
    this.currentReport = this.editorReportService.report;
    this.editorReportService.parseAll(); // 编译

    this.event.eventEmit.subscribe((value: any) => {
      if (value === 0) {
        this.scroll.nativeElement.scrollTop = 0;
      } else if (value === -1) {
        this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
      }
   });
  }

  public onResize() {
    // 更新大小
    this.editorHeight = (window.innerHeight - 110) + 'px'; // raw 110
  }
}
