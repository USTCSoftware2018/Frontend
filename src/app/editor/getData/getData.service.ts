import { Injectable } from '@angular/core';
import { HttpService } from '../../http.service';

import { mockStep } from '../mock/mock-steps'; // MockStep
import { mockSub } from '../mock/mock-sub'; // MockStep

@Injectable()
export class GetDataService {

  constructor(public httpService: HttpService) { }

  public getStepsMock() {
    return mockStep;
  }

  public getProcessMock() {
    return mockSub;
  }

  // Data from backend

  public getSteps() {
  }

  public getSubroutine() {

  }

  public getReport() {}

  public setSteps() {}

  public setSubroutine() {}

  public setReport() {}

}
