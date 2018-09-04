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

}
