import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ReportResultHeader, ReportGraphHeader } from '../../headers/article';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-pict-panel',
  templateUrl: './pict-panel.component.html',
  styleUrls: ['./pict-panel.component.less']
})
export class PictPanelComponent implements OnInit, OnChanges {

  @Input() ret: ReportResultHeader;
  previewImage = '';
  previewVisible = false;

  constructor(public http: HttpClient, private msg: NzMessageService) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  handlePreview = (pict: ReportGraphHeader) => {
    this.previewImage = pict.url;
    this.previewVisible = true;
  }

}
