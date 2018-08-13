import { Component, OnInit } from '@angular/core';
import { User } from './Interface/User';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  user: User;
  title = 'igem-frontend';
  constructor(private httpService: HttpService) {
    this.show();
   }

  show() {
    this.httpService.getUser(1)
      .subscribe((user: User) => this.user = user);
  }

}
