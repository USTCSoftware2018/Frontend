import { Injectable } from '@angular/core';
import {  ReportHeader, ReportSubroutineHeader, ReportStepsHeader, ReportGraphHeader } from '../headers/article';
import { EditorSubroutineHeader } from '../headers/steps';

@Injectable()
export class AppendixService {

  constructor() { }

  appendixGetDesc(sub: ReportSubroutineHeader, content: string) {
    sub.desc = content;
  }

  appendixSetDesc(sub: ReportSubroutineHeader) {
    return sub.desc;
  }

  appendixGetRemark(sub: ReportSubroutineHeader, content: string) {
    sub.remark = content;
  }

  appendixSetRemark(sub: ReportSubroutineHeader) {
    return sub.remark;
  }

  appendixAddPicture(sub: ReportSubroutineHeader, url: string, name?: string) {
    if (!sub.pic) {
      sub.pic = [];
    }
    const _new_pic = new ReportGraphHeader(url, name);
    sub.pic.push(_new_pic);
  }

  appendixDeletePicture(sub: ReportSubroutineHeader, idx: number) {
    if (idx < 0 || !sub.pic ||idx > sub.pic.length) {
      return;
    }
    sub.pic.splice(idx, 1);
  }
}
