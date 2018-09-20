import { Injectable } from '@angular/core';

import {EditorStepHeader, EditorSubroutineHeader} from '../headers/steps';
import {GetDataService} from '../getData/getData.service';

@Injectable()
export class StepsService {

  _steps: EditorStepHeader[];
  _subs: EditorSubroutineHeader[];

  public get steps() {
    return this._steps;
  }

  public get subs() {
    return this._subs;
  }

  constructor(public getDataService: GetDataService) {}

  public mockData() {
    this._steps = this.getDataService.getStepsMock();
    this._subs = this.getDataService.getProcessMock();
  }

  public findStep(stepId: string) {
    // 查找指定 id 的 step 的第一个
    return this.steps.filter ( step => step.id === stepId)[0];
  }

  public findSubroutine(subId: string) {
    // 查找指定 id 的 subroutine 的第一个
    return this.subs.filter ( sub => sub.id === subId)[0];
  }

  public addSteps() {
    // 没有定义
  }

  public addSubroutine() {
    // 没有定义
  }

  public getTemp(stepId: string) {
    const step_t = this.findStep(stepId);
    return step_t.template;
  }
}
