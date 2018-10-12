import { Component, ViewChild, ElementRef, OnInit, Input, OnChanges} from '@angular/core';
import { ReportHeader, ReportStepsHeader } from '../headers/article';
import {RenderServiceService} from './render-service.service';

@Component({
  selector: 'app-report-render',
  templateUrl: './report-render.component.html',
  styleUrls: ['./report-render.component.less']
})
export class ReportRenderComponent implements OnInit, OnChanges {

  @Input() reportId: number;

  public extraContent: {};

  constructor(public renderService: RenderServiceService ) { }

  ngOnInit() {
    this.renderService.getReportFromBackend(this.reportId);
  }

  ngOnChanges() {
  }

}
