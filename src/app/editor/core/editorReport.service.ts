import { Injectable, OnInit } from '@angular/core';
import {  ReportHeader, ReportSubroutineHeader, ReportStepsHeader } from '../headers/article';
import {StepsService} from './steps.service';


@Injectable()
export class EditorReportService {

  private _report: ReportHeader; // 当前文章

  public get report () {
    return this._report;
  }

  public set report (report: ReportHeader) {
    this._report = report;
  }


  constructor(public stepsService: StepsService) { }

  public initReport() {
    // 初始化文章
    this.report = new  ReportHeader();
    this.report.title = '';
    this.report.introduction = '';
    this.report.label = [];
    this.report.mdate = '';
    this.report.ndate = '';
    this.report.result = '';
    this.report.subroutines = [];
    this.mockReport();
  }




  public parser (temp: string, data: any): string[] {
    // 解析简单模版

    temp += ' - ';
    const tokens = temp.split(' ').filter((elem) => elem !== '');
    let _ret = [];
    let _sentense: any = {};
    let states = 0;
    for (const token of tokens) {
      console.log(token);
      if (token === '-') {
        _ret.push(_sentense);
        _sentense = new Object();
        _sentense.attr = [];
        states = 0;
      } else if (states === 0) {
        states += 1;
        _sentense.type = token;
      } else if (states === 1) {
        states += 1;
        _sentense.label = token;
      } else if (states === 2) {
        states += 1;
        _sentense.default = token;
      } else {
        if (token[0] === '@') {
          _sentense.attr.push(token);
        } else {
          _sentense.unit = token;
        }
      }
    }
    _ret = _ret.filter( (elem) => Object.keys(elem).length > 1 );
    console.log(_ret);
    return _ret;
  }

  public mockReport() {
    // 模拟文章数据
    const newSub = new ReportSubroutineHeader;
    newSub.type = 'add';
    newSub.idx = 1;
    newSub.steps = [];

    const newStep = new ReportStepsHeader;
    newStep.type = 'add';
    newStep.idx = 1;
    newStep.data = {};
    newStep.temp = '';
    newSub.steps.push(newStep);
    this.report.subroutines.push(newSub);
  }

}
