import { Component, OnInit,  ElementRef, ViewChild  } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
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
export class EditAreaComponent implements OnInit {

  editorHeight: string; // 判断高度
  currentReport: ReportHeader;
  flag: string;

  @ViewChild('scrollss') editorArea: ElementRef;
  @ViewChild('info') editorInfo: ElementRef;
  @ViewChild('result') editorResult: ElementRef;


  options: SortablejsOptions = {
    handle: '.subroutineTitlePart',
  };

  constructor(public editorReportService: EditorReportService,
              public event: EditorEventService,
              public element: ElementRef) { }

  ngOnInit() {
    this.onResize();
    this.flag = 'inactive';
    this.editorReportService.initReport();
    this.currentReport = this.editorReportService.report;
    this.editorReportService.parseAll(); // 编译

    this.event.eventEmit.subscribe((value: any) => {
      if (value === 0 ) {
        this.editorArea.nativeElement.scrollTop = 0;
      } else if (value === 1 ) {
        console.log(value);
        this.editorArea.nativeElement.scrollTop = this.editorArea.nativeElement.scrollHeight;
      }
      // } else if ( value === 1 ) {
        // this.editorArea.nativeElement.scrollTop = this.editorInfo.nativeElement.scrollHeight;
      // } else if ( value === 2 ) {
        // this.editorArea.nativeElement.scrollTop = this.editorResult.nativeElement.scrollHeight;
      // }
   });
  }

  public onResize() {
    // 更新大小
    this.editorHeight = (window.innerHeight - 110) + 'px'; // raw 110
  }

}
