import { Component, OnInit } from '@angular/core';
import { Simuser } from '../../Interface/userinfo';
import {user1, user2, user3 } from '../../Interface/mock-user';

@Component({
  selector: 'app-popular-igemers',
  templateUrl: './popular-igemers.component.html',
  styleUrls: ['./popular-igemers.component.less']
})
export class PopularIgemersComponent implements OnInit {
  igemers: Simuser[] = [user1, user2, user3];
  constructor() { }

  ngOnInit() {
  }

}
