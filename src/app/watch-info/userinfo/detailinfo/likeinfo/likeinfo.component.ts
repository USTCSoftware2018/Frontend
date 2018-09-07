import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Like} from '../../user';
@Component({
  selector: 'app-likeinfo',
  templateUrl: './likeinfo.component.html',
  styleUrls: ['./likeinfo.component.less']
})
export class LikeinfoComponent implements OnInit, OnChanges {
  title: String;
  @Input() like: Like;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.title = this.like.ouser.name + '   likes   ' + this.like.report.title;
  }

}
