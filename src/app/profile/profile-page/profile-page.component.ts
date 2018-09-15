import { Component, OnInit } from '@angular/core';
import { User } from "../../Interface/userinfo";
import { USER } from "../../Interface/mock-user";
import { SIMUSER } from "../../Interface/mock-user";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit {
  user: User = USER;
  simuser = SIMUSER;
  constructor() { }

  ngOnInit() {
  }

}
