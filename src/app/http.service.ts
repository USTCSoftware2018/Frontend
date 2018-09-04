import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { User } from './Interface/User';
import { MyResponse } from './Interface/MyResponse';
import { MyNotification } from './Interface/myNotification';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private global_url = 'https://api.biohub.tech';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

// --------------- ******************** User ******************** ------------------//

  // create a new user
  create_user(user: User): Observable<MyResponse<User>> {
    const url = `${this.global_url}/users`;
    return this.http.post<MyResponse<User>>(url, user, this.httpOptions)
      .pipe(
        retry(3)
      );
  }


  // get all users
  get_all_users() {
    const url = `${this.global_url}/users`;
    return this.http.get(url)
      .pipe(
        retry(3),
        tap(() => console.log(`fetch all users`))
    );
  }

  // get user by id
  get_user_by_id(id: number): Observable<MyResponse<User>> {
    const url = `${this.global_url}/users/${id}`;
    return this.http.get<MyResponse<User>>(url)
      .pipe(
        retry(3),
        tap(() => console.log(`fetch user with ${id}`))
      );
  }

  // update user (myself)
  update_user(user: User): Observable<User> {
    const url = `${this.global_url}/users`;
    return this.http.put<User>(url, user, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

  // delete user from the server
  delete_user_by_id(id: number): Observable<{}> {
    const url = `${this.global_url}/users/${id}`;
    return this.http.delete(url, this.httpOptions)
      .pipe(
        retry(3),
        tap(() => console.log(`delete user with ${id}`))
      );
  }

  // follow somebody by id
  follow_somebody_by_id(data: {user_id: number}) {
    const url = `${this.global_url}/users/followers`;
    return this.http.post<MyResponse<User>>(url, data, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

  // unfollow somebody
  unfollow_somebody_by_id(id: number) {
    const url = `${this.global_url}/users/followers/${id}`;
    return this.http.delete(url, this.httpOptions)
      .pipe(
        retry(3)
      );
  }





// --------------- ******************** Action ******************** ------------------//

  // activate account
  activate_acount(token: string) {
    const url = `${this.global_url}/signin/comfirm/${token}`;
    return this.http.get(url, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

  // forget password
  forget_password(email: string, data: {email: string}) {
    const url = `${this.global_url}/forget-password`;
    return this.http.post(url, data, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

  // sign in
  sign_in(data: {information: string, password: string}) {
    const url = `${this.global_url}/signin`;
    return this.http.post(url, data, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

  // get feeds
  get_feeds() {
    const url = `${this.global_url}/get-feeds`;
    return this.http.get(url)
      .pipe(
        retry(3),
        tap(() => console.log(`fetch all feeds`))
    );
  }


  // get someone's favorites
  get_favorites_by_id(id: number) {
    const url = `${this.global_url}/users/${id}/favorites`;
    return this.http.get(url, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

  // get someone's followers
  get_followers_by_id(id: number) {
    const url = `${this.global_url}/users/${id}/followers`;
    return this.http.get(url)
      .pipe(
        retry(3),
        tap(() => console.log(`fetch id's followers`))
    );
  }

  // get someone's collections
  get_collections(id: number) {
    const url = `${this.global_url}/users/${id}/collections`;
    return this.http.get(url)
      .pipe(
        retry(3),
        tap(() => console.log(`fetch id's collections`))
    );
  }

  // get someone's followings
  get_followings(id: number) {
    const url = `${this.global_url}/users/${id}/followings`;
    return this.http.get(url)
      .pipe(
        retry(3),
        tap(() => console.log(`fetch id's followings`))
    );
  }

  // --------------- ******************** Notification ******************** ------------------//

  // get all notification
  get_all_notification() {
    const url = `${this.global_url}/notifications`;
    return this.http.get(url)
      .pipe(
        retry(3),
        tap(() => console.log(`fetch all notifications`))
    );
  }

  // create new notification
  create_notification(data: MyNotification) {
    const url = `${this.global_url}/notifications`;
    return this.http.post(url, data, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

  // delete a notification
  delete_notification(id: number) {
    const url = `${this.global_url}/notifications/${id}`;
    return this.http.delete(url, this.httpOptions)
      .pipe(
        retry(3),
        tap(() => console.log(`delete notification with ${id}`))
      );
  }


  // --------------- ******************** Reports ******************** ------------------//



  //  get reports by id for reading
  get_reports_by_id(id: number) {
    const url = `${this.global_url}/reports/${id}`;
    return this.http.get(url)
      .pipe(
        retry(3),
        tap(() => console.log(`fetch reports with idnumber ${id}`))
    );
  }

  // praise a report
  praise_report_by_id(report_id: number) {
    const url = `${this.global_url}/reports`;
    return this.http.post(url, {id: report_id}, this.httpOptions)
      .pipe(
        retry(3),
        tap(() => console.log(`praise success`))
      );
  }

  // cancel praise
  cancel_praise(id: number) {
    const url = `${this.global_url}/reports/${id}`;
    return this.http.delete(url, this.httpOptions)
      .pipe(
        retry(3),
        tap(() => console.log(`delete praise with ${id}`))
      );
  }

// --------------- ******************** Comment ******************** ------------------//


  // create_comment
  create_comment(data: Comment) {
    const url = `${this.global_url}/comments`;
    return this.http.post(url, data, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

  // update_comment
  update_comment(data: Comment, id: number) {
    const url = `${this.global_url}/comments/${id}`;
    return this.http.put<User>(url, data, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

  // delete_comment
  delete_comment(id: number) {
    const url = `${this.global_url}/coments/${id}`;
    return this.http.delete(url, this.httpOptions)
      .pipe(
        retry(3),
        tap(() => console.log(`delete comment with ${id}`))
      );
  }


// --------------- ******************** Editor ******************** ------------------//

// ************ Reports ************ //
  // create new reports
  create_reports<Reports>(data: Reports) {
    const url = `${this.global_url}/reports`;
    return this.http.post(url, data, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

  // update reports
  update_reports<Reports>(data: Reports, id: number) {
    const url = `${this.global_url}/editor/report/${id}`;
    return this.http.put<User>(url, data, this.httpOptions)
      .pipe(
        retry(3),
        tap(() => console.log(`update report with ${id}`))
      );
  }

  // get reports
  get_report_by_id(id: number) {
    const url = `${this.global_url}/editor/report/${id}`;
    return this.http.get(url)
      .pipe(
        retry(3),
        tap(() => console.log(`fetch the report with id ${id}`))
    );
  }

  // get the users all reports
  get_report_all() {
    const url = `${this.global_url}/editor/report`;
    return this.http.get(url)
      .pipe(
        retry(3),
        tap(() => console.log(`fetch all this users reports`))
    );
  }

// ************ Steps ************ //

  // get step for report
  get_step() {
    const url = `${this.global_url}/editor/step`;
    return this.http.get(url)
      .pipe(
        retry(3),
        tap(() => console.log(`fetch all steps for you`))
    );
  }

  // create new step
  create_step<step>(data: step) {
    const url = `${this.global_url}/editor/step`;
    return this.http.post(url, data, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

  // update step
  update_step<step>(data: step, id: number) {
    const url = `${this.global_url}/editor/step/${id}`;
    return this.http.put(url, data, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

// ************ Steps ************ //
  // get subroutine for report
  get_subroutine() {
    const url = `${this.global_url}/editor/subroutine`;
    return this.http.get(url)
      .pipe(
        retry(3),
        tap(() => console.log(`fetch all subroutines for you`))
    );
  }

  // create new subroutine
  create_subroutine<subroutine>(data: subroutine) {
    const url = `${this.global_url}/editor/subroutine`;
    return this.http.post(url, data, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

  // update subroutine
  update_subroutine<subroutine>(data: subroutine, id: number) {
    const url = `${this.global_url}/editor/subroutine/${id}`;
    return this.http.put(url, data, this.httpOptions)
      .pipe(
        retry(3)
      );
  }

}


