import { Injectable } from '@angular/core';
import { Simuser } from './Interface/userinfo';
import {HttpService} from './http.service';


@Injectable({
  providedIn: 'root'
})
export class UserSigninfoService {
  isLogin = false;
  myInfo: Simuser|undefined = undefined;
  username: string;
  password: string;


  constructor(private http: HttpService) {
  }

  setUserInfobyInfo( iflogin: boolean , info: any) {
    this.isLogin = iflogin;
    if ( ifSimuser(info)) {
      this.myInfo = info;
      this.myInfo.stat = info['stat'];
      this.myInfo.followed = true;
    } else {
     this.myInfo = undefined;
    }
  }
  setUserInfo( iflogin: boolean, info: any) {
    this.isLogin = iflogin;
    this.myInfo = info;
  }
}

function ifSimuser(info: any): info is Simuser {
  return (<Simuser>info).id !== undefined;
}
