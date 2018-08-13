import { Component, OnInit } from '@angular/core';
import { User } from '../Interface/User';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-testhttp',
  templateUrl: './testhttp.component.html',
  styleUrls: ['./testhttp.component.less']
})
export class TesthttpComponent implements OnInit {
  user: User;
  title = 'igem-frontend';
  constructor(private httpService: HttpService) { }

  show() {
    this.httpService.getUser(1)
      .subscribe((user: User) => this.user = user);
  }
  ngOnInit() {
    this.show();
  }

}
