import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../Interface/userinfo';
import {Archive} from '../../Interface/userinfo';
import {PopularReport} from '../../Interface/userinfo';
import {Label} from '../../Interface/userinfo';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;
  all_archive: Archive[] = [];
  all_labels: Label[] = [];
  all_pop_report: PopularReport[] = [];
  constructor() { }

  ngOnInit() {
    this.initInfo();
  }
  initInfo() {
    this.all_archive = this.user.classification.archives;
    this.all_pop_report = this.user.classification.popular_reports;
    this.all_labels = this.user.classification.labels;

  }
}
