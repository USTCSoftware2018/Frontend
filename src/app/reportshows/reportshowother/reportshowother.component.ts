import { Component, OnInit } from '@angular/core';
import { Report } from '../reportshow/reportshow';
import { REPORTS } from '../reportshow/mock-reports';
import { Socialcomments } from '../reportshow/socialinfo';
import {SOLICIALINFO, SOCIALCOMMENTS, ME} from '../reportshow/mock-Socialinfo';
import { User } from '../reportshow/user';
import { USER } from '../reportshow/mock-user';
import { ShareModule } from '../../share/share.module';
import { Simuser } from '../../Interface/userinfo';
import { user1 } from '../../Interface/mock-user';
import {variable} from '@angular/compiler/src/output/output_ast';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import {ReportshowsModule} from '../reportshows.module';
import {HttpService} from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';

@Component({
  selector: 'app-reportshowother',
  templateUrl: './reportshowother.component.html',
  styleUrls: ['./reportshowother.component.less']
})
export class ReportshowotherComponent implements OnInit {

  reports = REPORTS;
  Report = REPORTS[1];
  socialinfo = SOLICIALINFO;
  socialcomments = SOCIALCOMMENTS;
  selectedcomments: Socialcomments;
  user = USER;
  user1 = user1;
  me = ME;
  constructor(private http: HttpService) { }

  Initlikecolor() {
    const __this = this;
    const callback = function(result: ApiResult) {
      __this.socialcomments = result.data;
    };
    this.http.get_report_list_by_userid(1, callback);
  }

  changecolor(): void {
    const Like = document.getElementById('change1');
    if (Like.classList.contains('anticon-like-o')) {
      Like.classList.remove('anticon-like-o');
      Like.classList.add('anticon-like');
      Like.style.color = 'blue';

    } else if (Like.classList.contains('anticon-like')) {
      Like.classList.remove('anticon-like');
      Like.classList.add('anticon-like-o');
      Like.style.color = 'rgba(0, 0, 0, 0.65)';
    }
  }

  changecolor2(comment: Socialcomments): void {
    this.selectedcomments = comment;
    if (this.selectedcomments.likeo) {
      this.selectedcomments.likeo = false;
    } else {
      this.selectedcomments.likeo = true;
    }
  }


  ngOnInit() {
  }

}
