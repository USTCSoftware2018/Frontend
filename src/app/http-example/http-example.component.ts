import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.less']
})
export class HttpExampleComponent implements OnInit {

  login_receive: any;
  register_receive: any;

  constructor(private http: HttpService) { }

  LogIn(data: any) {
    this.http.log_in(data)
      .subscribe(
        receive => {
          this.login_receive = receive;
          console.log(11);
          console.log('message');
          console.log(receive);
        },
        err => {
          this.login_receive = err['error'];
          console.log(err);
        }
      );
  }

  Register(data: any) {
    this.http.create_user(data)
      .subscribe(
      receive => {
        this.register_receive = receive;
        console.log(1111);
        console.log(receive); },
      err => {
        console.log(1);
        console.log(err);
      }
    );
  }



  ngOnInit() {
    this.LogIn({username: 'test', password: 'test'});
  }

}

