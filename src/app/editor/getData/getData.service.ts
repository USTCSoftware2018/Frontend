import { Injectable } from '@angular/core';
import {EditorStepHeader, EditorSubroutineHeader} from '../headers/steps';

import { HttpService } from '../../http.service';
import { mockStep } from '../mock/mock-steps'; // MockStep
import { mockSub } from '../mock/mock-sub'; // MockStep

@Injectable()
export class GetDataService {
  user: any;

  constructor(public httpService: HttpService) { }

  public getStepsMock() {
    return mockStep;
  }

  public getProcessMock() {
    return mockSub;
  }

  public saveNewStep(step: EditorStepHeader, callback: any) {
    const tmp = {};
    tmp['content_json'] = JSON.stringify(step);
    tmp['yield_method'] = step.yield_method;
    console.log(tmp);
    this.httpService.create_step(tmp, callback);
  }

  public saveNewSubroutine(sub: EditorSubroutineHeader, callback: any) {
    const tmp = {};
    tmp['content_json'] = JSON.stringify(sub);
    tmp['yield_method'] = 'Actually not use';
    console.log(tmp);
    this.httpService.create_subroutine(tmp, callback);
  }

  public getMySteps(callback: any) {
    this.httpService.get_all_my_steps(callback);
  }

  public getMySubs(callback: any) {
    this.httpService.get_all_my_subroutines(callback);
  }
}
