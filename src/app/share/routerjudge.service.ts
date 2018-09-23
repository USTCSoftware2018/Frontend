import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import {UserSigninfoService} from '../user-signinfo.service';
import {ShareModule} from './share.module';

@Injectable({
  providedIn: 'root'
})
export class RouterjudgeService {
  constructor(
    private router: Router,
    private userinfo: UserSigninfoService
  ) { }
  // if myself
  ifMyself = (id: number) => {
    const ifLogin = this.userinfo.isLogin;
    if (!ifLogin) {
      return false;
    }
    const myid = this.userinfo.myInfo.id;
    if (id === myid) {
      return true;
    } else {
      return false;
    }
  }
  //  control routerlink
  goToJudge = (id: number, myurl: string, othersurl: string) => {
    const isme = this.ifMyself(id);
    if (isme) {
      this.router.navigateByUrl(myurl);
    } else {
      this.router.navigateByUrl(othersurl);
    }
  }
  // 点击头像
  gotoUserIndex = (id: number) => {
    this.goToJudge(id, '/mypersonalcenter/index', '/userprofile/' + id);
  }
  // 点击数字
  gotoUserDetailInfo = ( id: number) => {
    this.goToJudge(id, '/mypersonalcenter/detailinfo', '/userprofile/' + id);
  }
  // 点击label
  gotoReportbyLabel = ( id: number, name: string) => {
    this.goToJudge(id, '/mypersonalcenter/detailinfo/label/' + name , '/userprofile/' + id + '/label/' + name);
  }
  // 点击archive
  gotoReportbyArchive = ( id: number, date: string) => {
    this.goToJudge(id, '/mypersonalcenter/detailinfo/archive/' + date, '/userprofile/' + id + '/archive/' + date);
  }
}
