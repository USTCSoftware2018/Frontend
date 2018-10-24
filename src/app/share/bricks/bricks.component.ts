import {Component, OnInit, Input} from '@angular/core';
import {BioBrick} from '../../Interface/userinfo';

@Component({
  selector: 'app-bricks',
  templateUrl: './bricks.component.html',
  styleUrls: ['./bricks.component.less']
})
export class BricksComponent implements OnInit {
  @Input() biobrick: BioBrick;
  // = {
  //   weight: 0.119047619047619,
  //   part_type: 'Intermediate',
  //   status: 'Deleted',
  //   desc: ' Intermediate part from assembly 236 -- No description -- Usage and Biology -- ' +
  //   'Please enter your experience with this part here -- Functional Parameters',
  //   author: 'Randy Rettberg',
  //   part_name: 'BBa_S01288',
  //   uses: 0,
  //   part_status: 'sfuaiv',
  //   sample_status: 'Discontinued',
  // };

  constructor() {
  }
  ngOnInit() {

  }

}
