import { Component, OnInit } from '@angular/core';
import { User } from './Interface/User';
import { HttpService } from './http.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  user: User = null;
  title = 'igem-frontend';
  path: any = null;
  constructor(private httpService: HttpService, location: Location) {
    this.show();
   }

  ngOnInit() {
    this.path = location.pathname;
  }

  show() {
    this.httpService.getUser(1)
      .subscribe((user: User) => this.user = user);
  }

}
