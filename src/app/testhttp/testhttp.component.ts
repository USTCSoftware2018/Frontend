import { Component, OnInit } from '@angular/core';
import { User } from '../Interface/User';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-testhttp',
  templateUrl: './testhttp.component.html',
  styleUrls: ['./testhttp.component.less']
})
export class TesthttpComponent implements OnInit {
<<<<<<< HEAD
  constructor() { }
=======
  constructor(private httpService: HttpService) { }
>>>>>>> http-service

  ngOnInit() {
  }

}
