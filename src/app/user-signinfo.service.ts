import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSigninfoService {
  userSignin: {};
  constructor() {
  }
  setUserInfo(info: Object) {
    this.userSignin = info;
  }
  getUserInfo(){
    return this.userSignin;
  }
}
