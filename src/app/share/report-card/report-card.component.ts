import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Collect, Report} from '../../Interface/userinfo';
import {RouterjudgeService} from '../routerjudge.service';
import {ApiResult} from '../../Interface/ApiResult';
import {NzMessageService} from 'ng-zorro-antd';
import {HttpService} from '../../http.service';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.less']
})
export class ReportCardComponent implements OnInit {
  @Input() report: Report;
  @Output() togglecollect = new EventEmitter<Collect>();
  iscolloected: boolean;
  isliked: boolean;
  old_liked_bl: boolean;
  old_collected_bl: boolean;
  constructor(
    private routerjudge: RouterjudgeService,
    private message: NzMessageService,
    private http: HttpService,
    ) { }

  ngOnInit() {
    this.iscolloected = this.report.iscollected;
    this.isliked = this.report.isliked;
  }
  gotoIndex = () => {
    this.routerjudge.gotoUserIndex(this.report.author.id);
  }
  gotoReport = () => {
    this.routerjudge.gotoReportDisplay(this.report.author.id, this.report.id);
  }
  // 点赞回调函数定义
  liked_callback = (result: ApiResult) => {
    if (!result.success) {
      this.message.error( 'Fail to unfollow' + this.report.title);
      this.isliked = this.old_liked_bl;
    }
  }
  unliked_callback = (result: ApiResult) => {
    if (!result.success) {
      this.message.error( 'Fail to like' + this.report.title);
      this.isliked = this.old_liked_bl;
    }
  }
  toggleLiked = () => {
    // 点击先直接修改
    this.old_liked_bl = this.isliked;
    this.isliked = !this.old_liked_bl;
    // 根据现在是否点赞进行请求
    if (!this.old_liked_bl) {
      this.http.star(this.report.id, this.liked_callback);
    } else {
      this.http.unstar(this.report.id, this.unliked_callback);
    }
  }
  // 收藏回调函数定义
  toggleCollected = () => {
    // 点击先直接修改
    this.old_collected_bl = this.iscolloected;
    this.iscolloected = !this.old_collected_bl;
    // 发出收藏请求
    this.togglecollect.emit(
      { report: this.report,
        iscollected: this.old_collected_bl,
      });
    // // 根据现在是否收藏进行请求
    // if (!this.old_liked_bl) {
    //   this.http.star(this.report.id, this.collected_callback);
    // } else {
    //   this.http.unstar(this.report.id, this.uncollected_callback);
    // }
  }
}
