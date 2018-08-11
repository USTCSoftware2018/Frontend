import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get_user_name(userid : number) : any {
    this.http.get('http://127.0.0.1:8033/8a15fbb94471050bb46f/get-user-name/`${id}`/').subscribe(
        (val) => {
            console.log(val)
        }
    )
    return 0;
  }

}
