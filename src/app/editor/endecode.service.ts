// ============================================================================
// endecode.service.ts
// ----------
// ertuil 2018.8.10
// 该文件定义了与后端的结构，获取操作、过程以及文章。并且将xml转化为对象映射关系
// ============================================================================

import { Injectable } from '@angular/core';
import {ExperimentArticle, ExperimentStep, ExperimentAppendix, ExperimentPara} from './types';
import {mockDefaultSteps, mockUserSteps} from './mock';


@Injectable({
  providedIn: 'root'
})
export class EndecodeService {

  private _operate: ExperimentStep[];

  public get operate(): ExperimentStep[] {
    return this._operate;
  }

  public set operate(value: ExperimentStep[]) {
    this._operate = value;
  }

  private _currentArticle: ExperimentArticle;

  public get currentArticle(): ExperimentArticle {
    return this._currentArticle;
  }
  public set currentArticle(value: ExperimentArticle) {
    this._currentArticle = value;
  }

  constructor() { }


  public getOperates(userid?: number): ExperimentStep[] {

    let _rawtxt = mockDefaultSteps;
    if (userid) {
      _rawtxt += mockUserSteps;
    }
    this.operate = [];
    const XMLDOM: Document = (new DOMParser).parseFromString(_rawtxt, 'text/xml');

    const stepsDOM: NodeListOf<Node & ChildNode> = XMLDOM.getElementsByTagName('step-list')[0].childNodes;
    let node: Node;
    for (let ii = 0; ii < stepsDOM.length ; ii++) {
      node = stepsDOM[ii];
      let _tmpExperimentStep: ExperimentStep = new ExperimentStep();

    return this.operate;
  }

}
