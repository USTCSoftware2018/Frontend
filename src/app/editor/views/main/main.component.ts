import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NzNotificationService } from 'ng-zorro-antd';
import { EditorReportService } from '../../core/editorReport.service';
import {StepsService} from '../../core/steps.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  editorHeight: string; // 判断高度
  innerWidth: number; // 屏幕宽度；

  id = +this.route.snapshot.paramMap.get('id');

  constructor(public editorReportService: EditorReportService,
              public notice: NzNotificationService,
              public route: ActivatedRoute,
              public stepsService: StepsService) { }

  ngOnInit() {
    this.onResize();
    this.stepsService.mockData();

    if (this.id === 0) {
      this.editorReportService.initReport();
    } else {
      this.editorReportService.loadReport(this.id);
    }
  }

  public onResize() {
    this.editorHeight = (window.innerHeight - 46) + 'px';
    this.innerWidth = window.innerWidth;
  }

}
