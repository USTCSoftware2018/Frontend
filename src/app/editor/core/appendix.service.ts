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

  appendixAddPicture(sub: ReportSubroutineHeader, url: string, name?: string) {
    if (!sub.pic) {
      sub.pic = [];
    }
    const _new_pic = new ReportGraphHeader(url, name);
    sub.pic.push(_new_pic);
  }

  appendixDeletePicture(sub: ReportSubroutineHeader, idx: number) {
    if (idx < 0 || !sub.pic || idx > sub.pic.length) {
      return;
    }
    sub.pic.splice(idx, 1);
  }
}
