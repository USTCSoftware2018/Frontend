import { Component, OnInit , Input } from '@angular/core';
import {Otheruser} from '../../user';
@Component({
  selector: 'app-eachinfo1',
  templateUrl: './eachinfo1.component.html',
  styleUrls: ['./eachinfo1.component.less']
})
export class Eachinfo1Component implements OnInit {
  @Input() otheruser: Otheruser;
  @Input() isFollowing: Boolean;
  btncontent: String ;
  constructor() { }
  ngOnInit() {
    this.btncontent = this.isFollowing ? 'unfollow' : 'follow';
  }
}
