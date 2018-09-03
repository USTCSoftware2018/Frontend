import { Injectable } from '@angular/core';
import { HttpService } from '../../http.service';

import { mockStep } from '../mock/mock-steps'; // MockStep
import { mockSub } from '../mock/mock-sub'; // MockStep

@Injectable()
export class GetDataService {

  constructor(public httpService: HttpService) { }

  public getSteps() {
    return mockStep;
  }

  public getProcess() {
    return mockSub;
  }

  public getReport() {}

  public setSteps() {}

  public setProcess() {}

  public setReport() {}

}
