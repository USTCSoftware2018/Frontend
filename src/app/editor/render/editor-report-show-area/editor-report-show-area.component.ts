import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-report-show-area',
  template: `
  <div id="root"></div>
  `,
  styleUrls: ['./editor-report-show-area.component.less']
})

export class EditorReportShowAreaComponent implements OnInit {

  @ViewChild('root') myroot: ElementRef;
  constructor() { }

  ngOnInit() {
    $('#root').append('<h1>Hello World</h1>');
    $('h1').css('margin-top', '40px');
  }

}
