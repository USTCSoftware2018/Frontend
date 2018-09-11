import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../Interface/userinfo";
import {Simuser} from "../../Interface/userinfo";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;
  all_archive: string[] = [];
  all_labels: string[] = [];
  all_pop_report: String[] = [];
  constructor() { }

  ngOnInit() {
    this.initInfo();
  }
  initInfo(){
    //统计标签
    for(let i=0;i<this.user.reports.length;++i){
      this.all_labels.push(this.user.reports[i].label);
    }
    //统计日期
    for(let i=0;i<this.user.reports.length;++i){
      this.all_archive.push(this.user.reports[i].archive);
    }
    //统计受欢迎的文章
    for(let i=0;i<this.user.reports.length;++i){
      if(this.user.reports[i].popular_report){
      this.all_pop_report.push(this.user.reports[i].title);
      }
    }

  }
}
