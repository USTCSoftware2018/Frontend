import { Component, OnInit, Input } from '@angular/core';
import {Report} from '../../user';
@Component({
  selector: 'app-eachinfo2',
  templateUrl: './eachinfo2.component.html',
  styleUrls: ['./eachinfo2.component.less']
})
export class Eachinfo2Component implements OnInit {
  @Input() report: Report;
  constructor() { }

  ngOnInit() {
  }

}
