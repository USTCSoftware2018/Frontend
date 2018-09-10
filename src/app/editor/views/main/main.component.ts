import { Component, OnInit } from '@angular/core';
import { EditorReportService } from '../../core/editorReport.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  editorHeight: string; // 判断高度
  innerWidth: number; // 屏幕宽度；

  constructor(public editorReportService: EditorReportService) { }

  ngOnInit() {
    this.onResize();
  }

  public onResize() {
    this.editorHeight = (window.innerHeight - 46) + 'px';
    this.innerWidth = window.innerWidth;
  }

}
