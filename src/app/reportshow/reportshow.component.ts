import {Attribute, Component, Input, OnInit} from '@angular/core';
import { Report } from './reportshow';
import { REPORTS } from './mock-reports';
import { Socialcomments } from './socialinfo';
import { SOLICIALINFO , SOCIALCOMMENTS } from './mock-Socialinfo';
import { User } from './user';
import { USER } from './mock-user';
import {variable} from '@angular/compiler/src/output/output_ast';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';

@Component({
  selector: 'app-reportshow',
  templateUrl: './reportshow.component.html',
  styleUrls: ['./reportshow.component.less']
})
export class ReportshowComponent implements OnInit {

  reports = REPORTS;
  Report = REPORTS[1];
  socialinfo = SOLICIALINFO;
  socialcomments = SOCIALCOMMENTS;
  selectedcomments: Socialcomments;
  user = USER;

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

  constructor() { }

  ngOnInit() {
  }
}
