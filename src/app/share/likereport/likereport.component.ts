import {Component, Input, OnInit} from '@angular/core';
import { Like } from './likereport';

@Component({
  selector: 'app-likereport',
  templateUrl: './likereport.component.html',
  styleUrls: ['./likereport.component.less'],
})
export class LikereportComponent implements OnInit {
  @Input() like: Like;
  @Input() bkcolor: string;
  constructor() { }

  ngOnInit() {
  }

}
