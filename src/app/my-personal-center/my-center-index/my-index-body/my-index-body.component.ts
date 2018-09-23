import { Component, OnInit, Input} from '@angular/core';
import { Report } from '../../../Interface/userinfo';

@Component({
  selector: 'app-my-index-body',
  templateUrl: './my-index-body.component.html',
  styleUrls: ['./my-index-body.component.less']
})
export class MyIndexBodyComponent implements OnInit {
  @Input() collections: Report[];
  @Input() favorite: Report[];
  constructor() { }

  ngOnInit() {
  }

}
