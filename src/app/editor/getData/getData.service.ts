import { Injectable } from '@angular/core';
import { HttpService } from '../../http.service';

import { mockStep } from '../mock/mock-steps'; // MockStep
import { mockSub } from '../mock/mock-sub'; // MockStep

import { User } from '../../Interface/User';

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

  // Data from backend

  public getUser() {
    this.httpService.get_all_users().subscribe(
      cont => { console.log(cont); this.user = cont; },
      err => this.user = err
    );
  }

  public setUser() {
    const user = new User(1);
    user.about_me = 'ertuil';
    this.httpService.create_user(user).subscribe(
      cont => { console.log(cont); this.user = cont; },
      err => this.user = err
    );
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
