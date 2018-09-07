import {Component, Input, OnInit} from '@angular/core';
import { Like } from './likereport';
import {Expandin} from '../report-list-animation';

@Component({
  selector: 'app-likereport',
  templateUrl: './likereport.component.html',
  styleUrls: ['./likereport.component.less'],
  animations: [
   Expandin
  ]
})
export class LikereportComponent implements OnInit {
  @Input() like: Like;
  constructor() { }

  ngOnInit() {
  }

}
