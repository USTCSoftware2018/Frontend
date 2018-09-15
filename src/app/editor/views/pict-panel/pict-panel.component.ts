import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ReportSubroutineHeader, ReportGraphHeader } from '../../headers/article';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pict-panel',
  templateUrl: './pict-panel.component.html',
  styleUrls: ['./pict-panel.component.less']
})
export class PictPanelComponent implements OnInit, OnChanges {

  @Input() sub: ReportSubroutineHeader;
  previewImage = '';
  previewVisible = false;

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json'
    })
  };

  ngOnInit() {
  }

  ngOnChanges() {
  }

  handlePreview = (pict: ReportGraphHeader) => {
    this.previewImage = pict.url;
    this.previewVisible = true;
    console.log(this.sub);
  }

}
