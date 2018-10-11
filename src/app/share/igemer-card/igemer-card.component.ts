import { Component, OnInit, Input } from '@angular/core';
import {RouterjudgeService} from '../routerjudge.service';
import { Simuser } from '../../Interface/userinfo';

@Component({
  selector: 'app-igemer-card',
  templateUrl: './igemer-card.component.html',
  styleUrls: ['./igemer-card.component.less']
})
export class IgemerCardComponent implements OnInit {
  @Input() igemer: Simuser;
  constructor( private routerjudge: RouterjudgeService ) { }

  ngOnInit() {
  }
  gotoIndex = () => {
    this.routerjudge.gotoUserIndex(this.igemer.id);
  }
}
