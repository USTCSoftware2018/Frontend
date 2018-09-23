import { Injectable } from '@angular/core';
import { Simuser } from './Interface/userinfo';
import {HttpService} from './http.service';
import { user1} from './Interface/mock-user';

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

  setUserInfobyInfo( iflogin: boolean , info: Info|undefined) {
    this.isLogin = iflogin;
    if ( ifInfo(info)) {
      this.myInfo = {
        id: info.id,
        actual_name: info.actualname,
        name: info.username,
        organization: info.organization,
        email: info.email,
        avatar_url: info.avatar_url,
        location: info.location,
        about_me: info.description,
        followingnum: info.stat.following_count,
        followednum: info.stat.follower_count,
        likenum: info.stat.star_count,
        reportsnum: info.stat.experience_count,
        ifFollow: true,
      };
    } else {
     this.myInfo = undefined;
    }
  }
  setUserInfo( iflogin: boolean, info: Simuser|undefined) {
    this.isLogin = iflogin;
    this.myInfo = info;
  }
  getUserInfo() {
    return this.myInfo;
  }
  judgeIfLogin() {
  return this.isLogin;
  }
}

class Info {
  user_name: string;
  'id': number;
  'last_login': string;
  'username': string;
  'actualname': string;
  'organization': string;
  'email': string;
  'avatar_url': string;
  'location': string;
  'site_url': string;
  'description': string;
  'stat': {
    'following_count': number;
    'experience_count': number;
    'star_count': number;
    'follower_count': number;
  };
}
function ifInfo(info: Info|undefined): info is Info {
  return (<Info>info).id !== undefined;
}
