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

  public picUrl = 'https://api.biohub.tech/api/editor/graph/';

  constructor(public http: HttpClient, private msg: NzMessageService) { }

  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];

  ngOnInit() {
    this.ret.pic = [...this.ret.pic, this.fileList[0], this.fileList[0]];
  }

  ngOnChanges() {
  }

  handlePreview = (pict: any) => {
    console.log(pict);
    this.previewImage = pict.response.graph;
    this.previewVisible = true;
  }

  public picHttpMethod = (item) => {
    const httpOptions = {
      // headers: new HttpHeaders({
      //   'Content-Type':  'application/json'
      // }),
      withCredentials: true
    };
    item.withCredentials = true;
    console.log(item);

    const formData: FormData = new FormData();
    formData.append('file', item.file, item.file.name);

    return this.http.post(this.picUrl, formData, httpOptions).subscribe(
      ret => {item.onSuccess(ret);
              console.log(this.ret.pic); },
      error => {item.onError(error); },
    );
  }

}
