import {Component, OnInit, HostListener, AfterViewChecked, ChangeDetectorRef} from '@angular/core';
import { Simuser } from '../../Interface/userinfo';
import { UserSigninfoService } from '../../user-signinfo.service';
import { HttpService } from '../../http.service';
import {ApiResult} from '../../Interface/ApiResult';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit, AfterViewChecked {

  public ifLogin: boolean;
  public user: Simuser|undefined;
  constructor(private myinfo: UserSigninfoService,
              private cdRef: ChangeDetectorRef,
              private http: HttpService,
              private message: NzMessageService) {
  }

  ngOnInit() {
  }
  @HostListener('window: scroll', [])
  print() {
    console.log(this.ifLogin);
    console.log(this.myinfo.isLogin);
  }
  ngAfterViewChecked() {
    const myinfo = this.myinfo.isLogin;
    if (this.ifLogin !== myinfo) {
      this.ifLogin = myinfo;
      this.user = this.myinfo.myInfo;
      this.cdRef.detectChanges();
    }
  }
  logout() {
    this.http.user_logout(this.logout_callback);
  }
  logout_callback = (result: ApiResult) => {
    if (result.success) {
      this.myinfo.setUserInfo(false, undefined);
      this.message.success('Successfully log out!');
    } else {
      this.message.error('Fail to log out.' + result.data.detail);
    }
  }
}
