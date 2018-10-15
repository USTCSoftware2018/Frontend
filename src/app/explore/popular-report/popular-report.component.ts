import { Component, OnInit } from '@angular/core';
import { Report, Collect } from '../../Interface/userinfo';
import { report1 } from '../../Interface/mock-user';
import {HttpService} from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-popular-report',
  templateUrl: './popular-report.component.html',
  styleUrls: ['./popular-report.component.less']
})
export class PopularReportComponent implements OnInit {
  reports: Report[];
  collect_report = new Report();
  iscollect: boolean;
  isOkLoading: boolean;
  collectForm: FormGroup;
  /* for pending */
  count: number;
  pending_show: boolean;
  pending_wrong_show: boolean;
  /* for pending */
  constructor(
    private http: HttpService,
    private modalService: NzModalService,
    private fb: FormBuilder,
    private message: NzMessageService
    ) { }

  ngOnInit() {
    /* for pending */
    this.count = 0;
    this.pending_show = true;
    this.pending_wrong_show = false;
    /* for pending */
    this.getPopularReports();
    this.collectForm = this.fb.group({
      collection: [ null, [ Validators.required, Validators.maxLength(20) ] ],
    });
  }

  private getPopularReports = () => {
    const callback = (result: ApiResult) => {
      if (result.success) {
        this.reports = result.data.results;
        /* for pending */
        this.count++;
      } else {
        this.pending_wrong_show = true;
      }
      if (this.count === 1) {
        this.pending_show = false;
      }
      /* for pending */
    };
    this.http.get_popular_reports_by_system(callback);
  }
  showCollect = (event: Collect) => {
    this.collect_report = event.report;
    if ( !event.iscollected ) {
      this.iscollect = true;
    } else {
      this.modalService.confirm({
        nzTitle: 'Uncollect' + event.report.title,
        nzContent: 'Are you sure to cancle the collection',
        nzOkText: 'OK',
        nzCancelText: 'Cancel',
        nzOnOk: () => {
        }
      });
    }
  }
  notShow() {
    this.iscollect = false;
  }
  collectReport() {
    const collectinfo = this.collectForm.value;
    const callback = (result: ApiResult) => {
      if (result.success) {
        this.isOkLoading = true;
        this.iscollect = false;
        this.message.success('Successly collect the report.');
      }
    };
    this.isOkLoading = false;
    this.http.add_to_collection(this.collect_report.id , collectinfo.collection, callback);
  }
  // form variable
  get collection() {
    return this.collectForm.get('collection');
  }
  submitForm(): void {
    for (const i in this.collectForm.controls) {
      this.collectForm.controls[ i ].markAsDirty();
      this.collectForm.controls[ i ].updateValueAndValidity();
    }
  }
}
