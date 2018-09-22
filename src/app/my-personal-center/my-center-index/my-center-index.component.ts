import { Component, OnInit } from '@angular/core';
import {user1, report1} from '../../Interface/mock-user';

@Component({
  selector: 'app-my-center-index',
  templateUrl: './my-center-index.component.html',
  styleUrls: ['./my-center-index.component.less']
})
export class MyCenterIndexComponent implements OnInit {
  user = user1;
  collections = [report1];
  favorites = [report1];
  constructor() { }

  ngOnInit() {
  }

}
