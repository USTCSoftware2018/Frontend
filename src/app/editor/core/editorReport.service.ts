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
    // this.mockReport();
  }




  public parser (step: ReportStepsHeader ) {
    // 解析简单模版
    let temp = step.temp;
    const data = step.data;

    temp += ' - ';
    const tokens = temp.split(' ').filter((elem) => elem !== '');
    let _fields = [];
    let _field: any = {};
    let states = 0;
    for (const token of tokens) {
      console.log(token);
      if (token === '-') {
        _fields.push(_field);
        _field = new Object();
        _field.attr = [];
        states = 0;
      } else if (states === 0) {
        states += 1;
        _field.type = token;
      } else if (states === 1) {
        states += 1;
        _field.label = token;
      } else if (states === 2) {
        states += 1;
        _field.default = token;
      } else {
        if (token[0] === '@') {
          _field.attr.push(token);
        } else {
          _field.unit = token;
        }
      }
    }
    _fields = _fields.filter( (elem) => Object.keys(elem).length > 1 );
    for (const fld of _fields) {
      if (data[fld.label]) {
        fld.value = data[fld.label];
      } else {
        fld.value = fld.default;
      }
    }
    step.fields = _fields;
  }

  public parseAll() {
    for (const sub of this.report.subroutines ) {
      for (const step of sub.steps) {
        this.parser(step);
      }
    }
  }

  public reportSaveAll() {
    for (const sub of this.report.subroutines ) {
      for (const step of sub.steps) {
        this.reportSave(step);
      }
    }
  }

  public reportSave(step: ReportStepsHeader) {
    for (const name of step.fields.name) {
      step.data[name] = step.fields[name];
    }
    delete step.fields;
  }

  public reportSort(arrayAny: any) {
    arrayAny.sort( (a, b) => a.idx - b.idx );
  }

  public reportAddStep(stepid: string) {
    const _step_temp = this.stepsService.findStep(stepid);
    const _new_sub = new ReportSubroutineHeader();  // 新建 subroutine
    _new_sub.id = '';
    _new_sub.desc = '';
    _new_sub.name = _step_temp.name;
    _new_sub.idx =  (this.report.subroutines[this.report.subroutines.length - 1] || {idx: 0}).idx + 1;
    _new_sub.steps = [];

    const _new_step = new ReportStepsHeader();  // 新建 step
    _new_step.name = _step_temp.id;
    _new_step.data = {};
    _new_step.idx = 1;
    _new_step.temp = _step_temp.template;
    _new_step.id = _step_temp.id;
    _new_step.name = _step_temp.name;
    this.parser(_new_step);
    _new_sub.steps.push(_new_step);

    this.report.subroutines.push(_new_sub);
  }

  public reportAddSubroutine(subid: string) {
    const _sub_temp = this.stepsService.findSubroutine(subid);

    const _new_sub = new ReportSubroutineHeader();  // 新建 subroutine
    _new_sub.id = _sub_temp.id;
    _new_sub.desc = _sub_temp.desc;
    _new_sub.name = _sub_temp.name;
    _new_sub.idx =  (this.report.subroutines[this.report.subroutines.length - 1] || {idx: 0}).idx + 1;
    _new_sub.steps = [];

    for (const step_id of _sub_temp.steps) { // 建立每一个 steps
      const _step_temp = this.stepsService.findStep(step_id);
      const _new_step = new ReportStepsHeader();
      _new_step.name = _step_temp.id;
      _new_step.data = {};
      _new_step.idx = 1;
      _new_step.temp = _step_temp.template;
      _new_step.id = _step_temp.id;
      _new_step.name = _step_temp.name;
      this.parser(_new_step);
      _new_sub.steps.push(_new_step);
    }
    this.report.subroutines.push(_new_sub);
  }

  public reportDeleteStep(stepid: string) {
    // not implement error
    // It will never be completed.
  }

  public reportDeleteSubroutine(subIdx: number) {
    // not implement error
    const getIdx = (subs) => {};

  }

  public reportSwap() {
    // not implement error
  }

  public mockReport() {
    // 模拟文章数据
    const newSub = new ReportSubroutineHeader;
    newSub.id = 'add';
    newSub.idx = 1;
    newSub.steps = [];

    const newStep = new ReportStepsHeader;
    newStep.name = 'add';
    newStep.idx = 1;
    newStep.data = {speed: '4000'};
    newStep.temp = '- input speed 3000 rpm @small - input temp 20 @big';
    newSub.steps.push(newStep);
    this.report.subroutines.push(newSub);
  }

}
