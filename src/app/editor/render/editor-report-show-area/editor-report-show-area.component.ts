import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-report-show-area',
  template: `
  <div #root></div>
  `,
  styleUrls: ['./editor-report-show-area.component.less']
})

export class EditorReportShowAreaComponent implements OnInit {

  @ViewChild('root') myroot: ElementRef;
  constructor() { }

  ngOnInit() {
    $(this.myroot.nativeElement).append('<h1>Hello World</h1>');
  }

}
