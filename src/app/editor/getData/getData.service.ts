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

  public getUser() {
    let user: any;
    this.httpService.get_all_users().subscribe({
      next: cont => {console.log(cont); user = cont; },
      error: err => user = err
    });
    console.log(user);
    return user;
  }

  public getSteps() {
  }

  public getSubroutine() {

  }

  public getReport() {}

  public setSteps() {}

  public setSubroutine() {}

  public setReport() {}

}
