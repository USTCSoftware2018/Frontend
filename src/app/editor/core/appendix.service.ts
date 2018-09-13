import { Injectable } from '@angular/core';
import {  ReportHeader, ReportSubroutineHeader, ReportStepsHeader, ReportGraphHeader, subType } from '../headers/article';
import { EditorSubroutineHeader } from '../headers/steps';

import {EditorReportService} from './editorReport.service';

@Injectable()
export class AppendixService {

  constructor(public editor: EditorReportService) { }

  reportAddText() {
    const _new_sub = new ReportSubroutineHeader();  // 新建 subroutine
    _new_sub.id = '-98';
    _new_sub.desc = '';
    _new_sub.subType = subType.text;
    _new_sub.name = 'Text';
    _new_sub.idx =  0;
    this.editor.report.subroutines.push(_new_sub);
  }

  reportAddPict() {
    const _new_sub = new ReportSubroutineHeader();  // 新建 subroutine
    _new_sub.id = '-98';
    _new_sub.desc = '';
    _new_sub.subType = subType.pictures;
    _new_sub.name = 'Pictures';
    _new_sub.idx =  0;
    this.editor.report.subroutines.push(_new_sub);
    _new_sub.pic = [];
  }

  reportAddList() {
    const _new_sub = new ReportSubroutineHeader();  // 新建 subroutine
    _new_sub.id = '-98';
    _new_sub.desc = '';
    _new_sub.subType = subType.list;
    _new_sub.name = 'List';
    _new_sub.idx =  0;
    _new_sub.list = [];
    this.editor.report.subroutines.push(_new_sub);
    _new_sub.pic = [];
  }

  reportAddResult() {
    const _new_sub = new ReportSubroutineHeader();  // 新建 subroutine
    _new_sub.id = '-98';
    _new_sub.desc = '';
    _new_sub.subType = subType.result;
    _new_sub.name = 'Result';
    _new_sub.idx =  0;
    _new_sub.list = [];
    this.editor.report.subroutines.push(_new_sub);
    _new_sub.pic = [];
  }

  reportAddInfo() {
    const _new_sub = new ReportSubroutineHeader();  // 新建 subroutine
    _new_sub.id = '-98';
    _new_sub.desc = '';
    _new_sub.subType = subType.info;
    _new_sub.name = 'Info';
    _new_sub.idx =  0;
    _new_sub.list = [];
    this.editor.report.subroutines.push(_new_sub);
    _new_sub.pic = [];
  }

}
