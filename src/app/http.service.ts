import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, observable } from 'rxjs';
import { ApiResult } from './Interface/ApiResult';
import { callbackFunc } from './Type/callbackFunc';
import { create } from 'domain';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  private global_url = 'https://api.biohub.tech/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }

// --------------- ******************** User ******************** ------------------//

  rawFire(point: string, method: string, params: object, errorHandler: Function) {
    const apiURL = `${this.global_url}/${point}`;
    method = method.toLowerCase();
    let ret = new Observable;
    if (method === 'get') {
      ret = this.http.get(apiURL, this.httpOptions);
    } else if (method === 'post') {
      ret = this.http.post(apiURL, params, this.httpOptions);
    } else if (method === 'options') {
      ret = this.http.options(apiURL, this.httpOptions);
    } else if (method === 'patch') {
      ret = this.http.patch(apiURL, params, this.httpOptions);
    } else {
      ret = this.http.get(apiURL, this.httpOptions);
    }
    return ret;
  }

  fire(point: string, method: string, params: object, callback: callbackFunc) {

    const errorHandler = function(error) {
      const result = new ApiResult;
      result.success = false;
      result.data = error.error;
      result.status = error.status;
      callback(result);
    };

    const successHandler = function(data) {
      const result = new ApiResult;
      result.success = true;
      result.data = data;
      result.status = 200;
      callback(result);
    };

    this.rawFire(point, method, params, errorHandler).subscribe(
      data => successHandler(data),
      error => errorHandler(error)
    );
  }


  ///////////////////// User //////////////////////////////////////////
  get_simuser_by_id(id: number, callback: callbackFunc) {
    // get stat by id
    this.fire(`users/${id}/stat`, 'get', null, callback);
  }

  user_login(username: string, password: string, callback: callbackFunc) {
    // user login
    const params = {
      username: username,
      password: password
    };
    this.fire('users/login/', 'post', params, callback);
  }

  user_logout(callback: callbackFunc) {
    // user logout
    this.fire('users/logout/', 'get', null, callback);
  }

  update_password(old_password: string, new_password: string, callback: callbackFunc) {
    const params = {
      old: old_password,
      new1: new_password,
      new2: new_password
    };
    this.fire('users/change_password/', 'post', params, callback);
  }

  user_register(username: string, password: string, email: string, callback: callbackFunc) {
    // create a new user
    const params = {
      username: username,
      password: password,
      email: email,
    };
    this.fire('users/register/', 'post', params, callback);
  }

  update_profile(avatar_url: string, actualname: string, location: string, description: string, organization: string, 
    // update self profile
    // will be updated:
    //   actualname: "aaa"
    // will not be updated
    //   actualname: null
    email: string, callback: callbackFunc) {
      const params = {
        avatar_url: avatar_url,
        actualname: actualname,
        location: location,
        description: description,
        organization: organization,
        email: email
      };
      this.fire('users/me/', 'patch', params, callback);
    }

    update_actualname(actualname: string, callback: callbackFunc) {
      const params = {
        actualname: actualname
      };
      this.fire('users/actualname/', 'post', params, callback);
    }

  get_all_users(callback: callbackFunc) {
    // get all users
    this.fire('users/', 'get', null, callback);
  }

  get_user_by_id(id: number, callback: callbackFunc) {
    // get user by id
    this.fire(`users/${id}/`, 'get', null, callback);
  }

  get_myself(callback: callbackFunc) {
    // get myself
    this.fire(`users/me/`, 'get', null, callback);
  }

  delete_user_by_id(id: number, callback: callbackFunc) {
    // delete user from the server
    throw new Error('Not Implemented');
  }

  follow_user_by_id(user_id: number, callback: callbackFunc) {
    // follow somebody by id
    this.fire(`users/${user_id}/follow/`, 'post', null, callback);
  }

  unfollow_user_by_id(user_id: number, callback: callbackFunc) {
    // follow somebody by id
    this.fire(`users/${user_id}/unfollow/`, 'post', null, callback);
  }

  get_followers_by_id(user_id: number, callback: callbackFunc) {
    // get someone's followers
    this.fire(`users/${user_id}/followers/`, 'get', null, callback);
  }

  get_followings_by_id(user_id: number, callback: callbackFunc) {
    // get someone's followings
    this.fire(`users/${user_id}/following/`, 'get', null, callback);
  }



/////////////////////////// Report //////////////////////////////////////////
  get_report_list_by_userid(user_id: number, callback: callbackFunc) {
    this.fire(`users/report-list/${user_id}`, 'get', null, callback);
}










///////////////////////// Editor /////////////////////////////////////////
  // get all my steps
  get_all_my_steps(callback: callbackFunc) {
    // this.fire('editor/step', 'get', null, callback);
    this.fire('users/logout/', 'get', null, callback);
  }

  get_report_by_id(id: number, callback: callbackFunc) {
    this.fire(`editor/report/${id}`, 'get', null, callback);
  }

  // get step by id
  get_step_by_id(id: number, callback: callbackFunc) {
    this.fire(`editor/step/${id}`, 'get', null, callback);
  }

  create_step(step: object, callback: callbackFunc) {
    // create new step
    this.fire(`editor/step/`, 'post', step, callback);
  }

  delete_step(id: number, callback: callbackFunc) {
    // delete step by id
    this.fire(`editor/step/${id}`, 'delete', null, callback);
  }

  update_step(id: number, step: object, callback: callbackFunc) {
    // update step
    this.fire(`editor/step/${id}`, 'delete', step, callback);
  }

  get_all_my_subroutines(callback: callbackFunc) {
    // get all my subroutines
    this.fire(`editor/subroutine/`, 'get', null, callback);
  }

  get_subroutine_by_id(id: number, callback: callbackFunc) {
    this.fire(`editor/subroutine/${id}`, 'get', null, callback);
  }

  create_subroutine(subroutine: object, callback: callbackFunc) {
    // create new subroutine
    this.fire(`editor/subroutine/`, 'post', subroutine, callback);
  }

  delete_subroutine(id: number, callback: callbackFunc) {
    // delete subroutine by id
    this.fire(`editor/subroutine/${id}`, 'delete', null, callback);
  }

  update_subroutine(id: number, subroutine: object, callback: callbackFunc) {
    // update subroutine
    this.fire(`editor/subroutine/${id}`, 'post', subroutine, callback);
  }

  get_all_my_reports(callback: callbackFunc) {
    // get all my reports in editor
    this.fire(`editor/report/`, 'get', null, callback);
  }

  create_report(report: object, callback: callbackFunc) {
    // create new display-all-info
    this.fire(`editor/report/`, 'post', report, callback);
  }

  delete_report(id: number, callback: callbackFunc) {
    // delete display-all-info by id
    this.fire(`editor/report/${id}`, 'delete', null, callback);
  }

  update_report(id: number, report: object, callback: callbackFunc) {
    // update display-all-info
    this.fire(`editor/report/${id}`, 'post', report, callback);
  }

  /////////////////////// Notificaiton /////////////////////////
  get_all_my_notifications() {
    // get all my notifications
  }
}

