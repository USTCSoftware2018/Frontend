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

  ngOnInit() {
    this.http.test_fire();
  }
}

