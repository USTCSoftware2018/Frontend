import { Component, OnInit } from '@angular/core';
import { Report } from '../../Interface/userinfo';
import {report1 } from '../../Interface/mock-user';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  reports: Report[] = [report1];
  constructor() { }

  ngOnInit() {
    const victor = Victor('container', 'output');
    const theme = [
      ['#002c4a', '#005584'],
      ['#35ac03', '#3f4303'],
      ['#101C48', '#54ACB4'],
      ['#18bbff', '#00486b']
    ];
   function settheme() {
        victor(theme[2]).set();
   }
   settheme();
  }

}
