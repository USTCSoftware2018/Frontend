import { Injectable } from '@angular/core';
import { Simuser } from './Interface/userinfo';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserSigninfoService {
  isLogin = false;
  myInfo: Simuser|undefined;
  username: string;
  password: string;


  constructor(private http: HttpService) {
  }



  setUserInfobyInfo( iflogin: boolean , info: Info) {
    this.isLogin = iflogin;
    this.myInfo = {
      id: info.id,
      actual_name: info.actualname,
      name: info.user_name,
      organization: info.organization,
      email: info.email,
      avatar_url: info.avatar_url,
      location: info.location,
      about_me: info.description,
      followingnum: info.stat.following_count,
      followednum: info.stat.follower_count,
      likenum: info.stat.star_count,
      reportsnum: info.stat.experience_count,
      follow_or_unfollow: true,
      follow_or_edit: false,
    };
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
function ifSimuser(info: Simuser|undefined): info is Simuser {
  return (<Simuser>info).id !== undefined;
}
