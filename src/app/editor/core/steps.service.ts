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

  public addSteps(stepName: string, stepYield: string, stepTemp: {value: string}[]) {
    // 没有定义
    const newStep = new EditorStepHeader();
    newStep.id = (this.steps.length + 1).toString();
    newStep.desc = stepName;
    newStep.name = stepName;
    newStep.ico = '/assets/img/editor/icons/' + stepName[0].toUpperCase() + '.png';

    const arr: string[] =  [];
    for (const st of stepTemp) {
      arr.push(st.value);
    }
    newStep.template = '- ' + arr.join(' - ') + ' -';
    newStep.yield_method = stepName;
    // this._steps.push(JSON.parse(JSON.stringify(newStep)));
    this._steps = [ ...this._steps, newStep];
    // console.log(this.steps);
  }

  public addSubroutine(name: string, stepsLists: string[]) {
    // 新建新的过程
    const newSub = new EditorSubroutineHeader();
    newSub.id = (this.subs.length + 1).toString();
    newSub.name = name;
    newSub.steps = stepsLists;
    newSub.default = [];
    newSub.steps.forEach(element => {
      newSub.default.push({});
    });
    this._subs = [... this._subs, newSub];
  }

  public getTemp(stepId: string) {
    const step_t = this.findStep(stepId);
    return step_t.template;
  }

  public getIco(stepId: string) {
    const step_t = this.findStep(stepId);
    return step_t.ico;
  }

  public getYield(stepId: string) {
    const step_t = this.findStep(stepId);
    return step_t.yield_method;
  }

  public getMaterial(stepId: string) {
    const step_t = this.findStep(stepId);
    return step_t.material;
  }
}
